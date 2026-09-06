import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, symlink, rm } from "node:fs/promises";
import path from "node:path";
import { serveAsset } from "../lib/assets.ts";

test("asset API confines reads, distinguishes missing files, and revalidates cache", async () => {
  const temp = await mkdtemp(path.join(process.cwd(), ".asset-test-"));
  const root = path.join(temp, "content");
  try {
    await mkdir(root);
    await writeFile(path.join(root, "image.png"), "image bytes");
    await writeFile(path.join(temp, "secret.png"), "secret");
    await symlink(path.join(temp, "secret.png"), path.join(root, "escape.png"));
    const request = new Request("http://localhost/api/asset/content/image.png");
    for (const segments of [
      ["content", "..", "secret.png"],
      ["content", "../secret.png"],
      ["content", "escape.png"],
      ["content", "index.mdx"],
      ["data", "meta.yml"],
      ["content", "x\\..\\secret.png"],
    ]) {
      assert.equal((await serveAsset(segments, request, root)).status, 403);
    }
    assert.equal((await serveAsset(undefined, request, root)).status, 400);
    assert.equal((await serveAsset(["content", "missing.png"], request, root)).status, 404);
    const response = await serveAsset(["content", "image.png"], request, root);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("content-type"), "image/png");
    assert.equal(await response.text(), "image bytes");
    const cached = await serveAsset(
      ["content", "image.png"],
      new Request(request, { headers: { "if-none-match": response.headers.get("etag") } }),
      root,
    );
    assert.equal(cached.status, 304);
    await writeFile(path.join(root, "image.png"), "updated image bytes");
    assert.equal(
      (
        await serveAsset(
          ["content", "image.png"],
          new Request(request, { headers: { "if-none-match": response.headers.get("etag") } }),
          root,
        )
      ).status,
      200,
    );
  } finally {
    await rm(temp, { recursive: true, force: true });
  }
});
