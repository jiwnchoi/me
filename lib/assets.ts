import { realpath, readFile, stat } from "node:fs/promises";
import path from "node:path";

const mediaTypes: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
};
function within(root: string, candidate: string) {
  const relative = path.relative(root, candidate);
  return (
    relative !== "" &&
    relative !== ".." &&
    !relative.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(relative)
  );
}
export async function serveAsset(
  segments: string[] | undefined,
  request: Request,
  root = path.join(process.cwd(), "content"),
) {
  if (!segments?.length) return new Response("File path is required", { status: 400 });
  if (
    segments[0] !== "content" ||
    segments.slice(1).some((part) => !part || part === "." || part === ".." || /[\\/\0]/.test(part))
  )
    return new Response("Forbidden", { status: 403 });
  const candidate = path.resolve(root, ...segments.slice(1));
  const contentType = mediaTypes[path.extname(candidate).toLowerCase()];
  if (!within(root, candidate) || !contentType) return new Response("Forbidden", { status: 403 });
  try {
    const [realRoot, realFile] = await Promise.all([realpath(root), realpath(candidate)]);
    if (!within(realRoot, realFile)) return new Response("Forbidden", { status: 403 });
    const info = await stat(realFile);
    if (!info.isFile()) return new Response("Not Found", { status: 404 });
    const etag = `W/"${info.size.toString(16)}-${info.mtimeMs.toString(16)}"`;
    const headers = new Headers({
      "Content-Type": contentType,
      ETag: etag,
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; sandbox",
    });
    if (request.headers.get("if-none-match")?.split(/,\s*/).includes(etag))
      return new Response(null, { status: 304, headers });
    headers.set("Content-Length", String(info.size));
    return new Response(new Uint8Array(await readFile(realFile)), { headers });
  } catch (error) {
    if (["ENOENT", "ENOTDIR", "EISDIR"].includes((error as NodeJS.ErrnoException).code ?? ""))
      return new Response("Not Found", { status: 404 });
    console.error("Asset read failed", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
