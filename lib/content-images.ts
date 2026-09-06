import images from "@/data/images.json";

const extensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
export function contentImage(route: string, name: string): string | undefined {
  const manifest: Record<string, string> = images;
  for (const extension of extensions) {
    const source = `${route.replace(/\/$/, "")}/${name}${extension}`;
    if (manifest[source]) return manifest[source];
  }
}
