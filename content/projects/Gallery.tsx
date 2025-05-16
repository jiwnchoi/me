import { Card } from "@/components";
import { getTimeStamp } from "@/utils";
import { existsSync } from "fs";
import { getPageMap } from "nextra/page-map";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirname = path.resolve(__dirname, "../../");
const extensions = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg"];

function getAssetPath(filename: string | null) {
  if (!filename) return null;
  return path.join(dirname, "public/assets", filename);
}

function getPublicPath(filename: string | null) {
  if (!filename) return null;
  return `/assets/${filename}`;
}

export default async function Gallery({
  title,
  contentPath,
  contentTypes = ["paper", "project"],
}: {
  title: string;
  contentPath: string;
  contentTypes: string[];
}) {
  const contentMap = (await getPageMap(contentPath)) as PageMapItem[]; // PageMapItem 타입 정의 필요
  const items = contentMap
    .filter(
      (item) =>
        contentTypes.includes(item.frontMatter?.type || "") &&
        item.name !== "index" &&
        item.frontMatter?.type !== "private",
    )
    .map((item) => {
      const foundFilename = extensions
        .map((ext) => `${item.name}${ext}`)
        .find((filename) => existsSync(getAssetPath(filename)!));

      const imagePath = foundFilename ? getPublicPath(foundFilename) : null;

      return {
        key: item.name,
        ...item.frontMatter,
        title: item.frontMatter?.shortTitle || item.frontMatter?.title || item.title || "",
        route: item.route,
        imagePath: imagePath,
        tags:
          typeof item.frontMatter?.tags === "string"
            ? [item.frontMatter?.tags]
            : (item.frontMatter?.tags ?? []),
        date: item.frontMatter?.date, // date 추가
      };
    })
    .sort((a, b) => getTimeStamp(b.date) - getTimeStamp(a.date));

  return (
    <>
      <h2 className="not-prose mt-4 mb-4 text-3xl font-bold md:mt-0">{title}</h2>
      <div
        className="mb-16 grid auto-rows-auto grid-cols-1 gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        }}>
        {items.map((item) => (
          <Card
            key={`project-card-${item.key}`}
            title={item.title}
            description={item.description}
            route={item.route}
            imagePath={item.imagePath}
            tags={item.tags}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
}
