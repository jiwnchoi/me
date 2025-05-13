import { useMDXComponents as getMDXComponents } from "@/mdx-components";
import { generateStaticParamsFor, importPage } from "nextra/pages";
import type { FC } from "react";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath, params.lang);
  return metadata;
}

type PageProps = Readonly<{
  params: Promise<{
    mdxPath: string[];
    lang: string;
  }>;
}>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Wrapper = getMDXComponents().wrapper;

const Page: FC<PageProps> = async (props) => {
  const params = await props.params;
  const result = await importPage(params.mdxPath, params.lang);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
};

export default Page;
