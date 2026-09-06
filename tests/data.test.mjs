import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { load, JSON_SCHEMA } from "js-yaml";
import { dataSchemas, siteDataSchema } from "../lib/data-schema.ts";

async function readData() {
  return Object.fromEntries(
    await Promise.all(
      Object.keys(dataSchemas).map(async (name) => [
        name,
        load(await readFile(new URL(`../data/${name}.yml`, import.meta.url), "utf8"), {
          schema: JSON_SCHEMA,
        }),
      ]),
    ),
  );
}
test("all repository data meets the schema and author relationships", async () => {
  assert.equal(siteDataSchema.safeParse(await readData()).success, true);
});
test("rejects malformed dates, duplicate ids, missing fields, unknown authors and typos", async () => {
  for (const mutate of [
    (data) => {
      data.news.news[0].date = "2026-02-30";
    },
    (data) => {
      data.career.career.push(data.career.career[0]);
    },
    (data) => {
      delete data.meta.contacts.email;
    },
    (data) => {
      data.publications.publications[0].authors.push("Unknown Author");
    },
    (data) => {
      data.meta.postion = "typo";
    },
  ]) {
    const data = await readData();
    mutate(data);
    assert.equal(siteDataSchema.safeParse(data).success, false);
  }
});
test("data generation is deterministic and preserves output mtime when unchanged", async () => {
  const run = () =>
    execFileSync(process.execPath, ["scripts/generate-data.mjs"], {
      cwd: new URL("../", import.meta.url),
    });
  run();
  const output = new URL("../data/index.ts", import.meta.url);
  const before = await stat(output);
  const content = await readFile(output, "utf8");
  run();
  assert.equal((await stat(output)).mtimeMs, before.mtimeMs);
  assert.equal(await readFile(output, "utf8"), content);
});
