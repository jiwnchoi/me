import { test } from "node:test";
import assert from "node:assert/strict";
import { formatDate, getTimeStamp } from "../utils/date.ts";

test("dates handle missing values, Present, month precision, and ranges", () => {
  assert.equal(formatDate(undefined), null);
  assert.equal(formatDate("Present"), "Present");
  assert.equal(formatDate("2025.02"), "Feb 2025");
  assert.equal(formatDate("2025-02-03", true), "Feb 03, 2025");
  assert.equal(formatDate({ from: "2025.08", to: "Present" }), "Aug 2025 ─ Present");
  assert.equal(getTimeStamp(undefined), 0);
  assert.equal(getTimeStamp("not a date"), 0);
  assert.ok(getTimeStamp("2026.01") > getTimeStamp("2025.12"));
});
