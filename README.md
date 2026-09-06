# Jiwon Choi's website

Personal portfolio, publications, projects, and MDX blog built with Next.js 16, React 19, Nextra 4, and Tailwind CSS 4.

## Development

Use Node.js 24 and the pinned pnpm version in `package.json`.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

`pnpm dev` validates YAML, generates gallery thumbnails, starts Next.js, and watches YAML edits. When adding or changing an image, run `pnpm images` to refresh the thumbnail manifest. The production build always refreshes both data and images.

## Content and data

- Edit `data/*.yml` for profile, career, education, publications, and other structured content.
- `lib/data-schema.ts` defines the data contract and TypeScript types. Invalid dates, missing fields, unknown keys, duplicate IDs, and missing author references fail generation with a field path.
- Add authors to `data/authors.yml` before referencing them in publications.
- Use quoted `YYYY-MM`, `YYYY-MM-DD`, or dotted equivalents for dates. `Present` is supported as the end of a career or education period.
- Edit `content/**/*.mdx` for page and post content. Existing content and original images remain the source of truth.
- `data/index.ts`, `data/images.json`, and `public/generated/` are generated and ignored by Git. Do not edit them directly.
- Gallery thumbnails are 720-pixel WebP derivatives with content-hashed filenames. Original images are preserved. The manifest eliminates per-render filesystem scans.
- Data is validated once and bundled as a static module. Production rendering needs no YAML parser or runtime YAML filesystem access.

## Verification

```sh
pnpm check   # lint, generate, typecheck, tests, format
pnpm build   # production build
pnpm start
```

The GitHub Actions quality workflow runs a frozen installation, all checks, and a production build for pull requests and pushes to `main`.

Tests cover asset path traversal and symlink confinement, cache revalidation, missing assets, data validation and author relationships, deterministic generation, and dates.

## Dependency policy

Runtime packages were refreshed against the npm registry on 2026-09-06. TypeScript remains on 6.0.3 because Nextra's `twoslash` dependency declares support for TypeScript 5 and 6, not 7. Node type definitions match Node 24. Unused direct dependencies and the unused Pagefind indexing step were removed. Nextra still brings some of these packages transitively.

Group compatible dependency updates in Dependabot; review major upgrades separately. Run `pnpm peers check` when upgrading the framework or compiler.

## UI conventions

Use shared cards, badges, date rendering, and item components. Keep links keyboard accessible, preserve native modifier-click behavior, use theme-aware text colors, and respect reduced-motion preferences. Cards grow with content and tags wrap on narrow screens.

## Asset API

`/api/asset/content/...` serves supported media only. It rejects traversal, source files, and symlinks escaping the content directory; missing assets return 404. Unversioned original assets use ETag revalidation instead of a year-long immutable cache. Gallery derivatives have content-addressed names.
