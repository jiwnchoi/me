import { formatDate, getTimeStamp } from "@/utils";
import { existsSync } from "fs";
import Image from "next/image";
import Link from "next/link";
import { getPageMap } from "nextra/page-map";
import path from "path";
import { twMerge } from "tailwind-merge";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirname = path.resolve(__dirname, "../../");
const extensions = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg"];

// Define interfaces for Nextra page map items

interface PageMapItem {
  name: string;
  route: string;
  frontMatter?: FrontMatter;
  title?: string;
  children?: PageMapItem[];
}

// Card component to display each item in the gallery
interface CardProps {
  title: string;
  description?: string;
  route: string;
  type?: string;
  imagePath?: string | null;
  tags: string[];
  date?: string;
}

async function Card({ title, description, route, imagePath, tags, date }: CardProps) {
  return (
    <Link href={route.replace("/content", "")} prefetch={true} className="not-prose">
      <div
        className={twMerge([
          "group h-fit overflow-hidden rounded-lg border transition-all duration-300 ease-in-out hover:-translate-y-1",
          "border-gray-200 bg-transparent hover:border-gray-300 hover:shadow-lg",
          "dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.12)]",
          "mt-2",
        ])}>
        {imagePath && (
          <div className="relative z-1 h-[120px] w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
            <Image
              src={imagePath}
              alt={`${title} thumbnail`}
              sizes="500px"
              fill
              placeholder="empty"
              className="not-prose absoute z-1 scale-[110%] object-cover"
              priority={false}
            />
            <div className="absolute inset-0 z-2 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        )}
        <div className="flex flex-col gap-2 p-4">
          <h3 className="text-base font-bold no-underline">{title}</h3>
          {description && (
            <p className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">{description}</p>
          )}
          <p className="mt-1 flex gap-2">
            {tags.map((t) => (
              <span
                key={`tag-${title}-${t}`}
                className="bg-primary text-primary-content -ml-0.5 rounded-md px-1 text-[11px] font-semibold">
                {t}
              </span>
            ))}
          </p>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">{date && formatDate(date)}</p>
        </div>
      </div>
    </Link>
  );
}

function getAssetPath(filename: string | null) {
  if (!filename) {
    return null;
  }
  return path.join(dirname, "public/assets", filename);
}

function getPublicPath(filename: string | null) {
  if (!filename) {
    return null;
  }
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
  const contentMap = (await getPageMap(contentPath)) as PageMapItem[];
  const items = contentMap
    .filter((item) => contentTypes.includes(item.frontMatter?.type || ""))
    .filter((item) => item.name !== "index" && item.frontMatter?.type !== "private")
    .map((item) => {
      const imageNames = extensions.map((ext) => `${item.name}${ext}`);
      const imageAssetPaths = imageNames.map((name) => getAssetPath(name));
      const imagePublicPaths = imageNames.map((name) => getPublicPath(name));
      const idx = imageAssetPaths.findIndex((path) => path && existsSync(path));
      const imagePath = imagePublicPaths[idx];

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
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            route={item.route}
            type={item.type}
            imagePath={item.imagePath}
            tags={item.tags}
            date={item.date}
          />
        ))}
      </div>
    </>
  );
}
