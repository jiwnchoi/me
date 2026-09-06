import { z } from "zod";

const text = z.string().trim().min(1);
const date = text.refine((value) => {
  const match = /^(\d{4})[.-](\d{2})(?:[.-](\d{2}))?$/.exec(value);
  if (!match) return false;
  const [, year, month, day = "01"] = match;
  const parsed = new Date(`${year}-${month}-${day}T00:00:00Z`);
  return (
    !Number.isNaN(parsed.getTime()) && parsed.toISOString().startsWith(`${year}-${month}-${day}`)
  );
}, "Use a valid YYYY-MM or YYYY-MM-DD date (dots are also accepted)");
const dateRange = z.strictObject({ from: date, to: z.union([date, z.literal("Present")]) });
const dated = z.union([date, dateRange]);
const url = z.url({ protocol: /^https?$/ });
const entry = z.strictObject({
  id: text,
  name: text,
  title: text,
  location: text.optional(),
  date: dated.optional(),
  description: text.optional(),
});
const experience = entry
  .omit({ date: true })
  .extend({ from: date, to: z.union([date, z.literal("Present")]) });
const publication = z.strictObject({
  id: text,
  title: text,
  authors: z.array(text).min(1),
  type: text,
  venue: text,
  url: z.strictObject({
    pdf: url.optional(),
    git: url.optional(),
    web: url.optional(),
    video: url.optional(),
  }),
});
const section = z.strictObject({
  key: text.regex(/^[a-z][a-z0-9-]*$/),
  title: text,
  shortTitle: text,
  type: z.enum(["main", "page"]),
});
function unique<T extends { id: string }>(schema: z.ZodType<T>) {
  return z
    .array(schema)
    .refine(
      (items) => new Set(items.map((item) => item.id)).size === items.length,
      "Duplicate entry id",
    );
}
export const dataSchemas = {
  authors: z.strictObject({
    authors: z
      .array(z.strictObject({ name: text, url: url.optional() }))
      .refine(
        (items) => new Set(items.map((item) => item.name)).size === items.length,
        "Duplicate author name",
      ),
  }),
  career: z.strictObject({ career: unique(experience) }),
  educations: z.strictObject({ educations: unique(experience) }),
  meta: z.strictObject({
    name: text,
    position: text,
    affiliation: text,
    contacts: z.strictObject({
      email: z.email(),
      github: text,
      linkedin: text,
      twitter: text,
      website: text,
      scholar: text,
      instagram: text,
    }),
  }),
  misc: z.strictObject({
    honors: unique(entry),
    services: unique(entry),
    scholarships: unique(entry),
    talks: unique(entry),
  }),
  news: z.strictObject({ news: z.array(z.strictObject({ date, description: text })) }),
  publications: z.strictObject({ publications: unique(publication) }),
  sections: z.strictObject({
    sections: z
      .array(section)
      .refine(
        (items) => new Set(items.map((item) => item.key)).size === items.length,
        "Duplicate section key",
      ),
  }),
  skills: z.strictObject({ skills: z.array(z.strictObject({ type: text, description: text })) }),
};
export const siteDataSchema = z.strictObject(dataSchemas).superRefine((data, ctx) => {
  const authors = new Set(data.authors.authors.map((author) => author.name));
  data.publications.publications.forEach((paper, index) => {
    paper.authors.forEach((author, authorIndex) => {
      if (!authors.has(author))
        ctx.addIssue({
          code: "custom",
          path: ["publications", "publications", index, "authors", authorIndex],
          message: `Unknown author: ${author}`,
        });
    });
  });
});
export type SiteData = z.infer<typeof siteDataSchema>;
export type Section = z.infer<typeof section>;
export type Publication = z.infer<typeof publication>;
