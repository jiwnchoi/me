import { serveAsset } from "@/lib/assets";

export const runtime = "nodejs";
export async function GET(
  request: Request,
  context: { params: Promise<{ assetPath?: string[] }> },
) {
  return serveAsset((await context.params).assetPath, request);
}
