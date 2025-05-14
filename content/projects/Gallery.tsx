import { getPageMap } from "nextra/page-map";

export default async function Gallery({ contentPath }: { contentPath: string }) {
  const contentMap = await getPageMap(contentPath);
  return <pre>{JSON.stringify(contentMap, null, 4)}</pre>;
}
