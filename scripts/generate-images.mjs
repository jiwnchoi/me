import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "public/generated");
await mkdir(output, { recursive: true });
const images = {};
for (const file of (await readdir(path.join(root, "content"), { recursive: true })).sort()) {
  if (!/\.(png|jpe?g|webp|avif)$/i.test(file)) continue;
  const source = await readFile(path.join(root, "content", file));
  const hash = createHash("sha256")
    .update("thumbnail-v1-720-80")
    .update(source)
    .digest("hex")
    .slice(0, 16);
  const filename = `${hash}.webp`;
  await sharp(source)
    .rotate()
    .resize({ width: 720, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(output, filename));
  images[`/content/${file.split(path.sep).join("/")}`] = `/generated/${filename}`;
}
const manifest = `${JSON.stringify(images, null, 2)}\n`;
const manifestPath = path.join(root, "data/images.json");
if ((await readFile(manifestPath, "utf8").catch(() => "")) !== manifest)
  await writeFile(manifestPath, manifest);
console.log(`Prepared ${Object.keys(images).length} gallery thumbnails.`);
