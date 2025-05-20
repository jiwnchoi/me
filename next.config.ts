import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  contentDirBasePath: "/content",
  latex: true,
});

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/asset/**/*": ["./content/**/*"],
  },
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "/mdx-components.tsx",
    },
  },
};

const config = withNextra(nextConfig);

export default config;
