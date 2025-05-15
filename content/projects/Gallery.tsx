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
interface FrontMatter {
  title: string;
  shortTitle?: string;
  description?: string;
  type?: string;
  filePath?: string;
  timestamp?: number;
  [key: string]: string | number | boolean | string[] | Record<string, unknown> | undefined;
}

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
}

async function Card({ title, description, route, imagePath }: CardProps) {
  return (
    <Link href={route.replace("/content", "")} prefetch={true} className="not-prose">
      <div
        className={twMerge([
          "group h-[240px] overflow-hidden rounded-lg border shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1",
          "border-gray-200 bg-transparent hover:border-gray-300 hover:shadow-lg",
          "dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        ])}>
        {imagePath && (
          <div className="relative z-1 h-[120px] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={imagePath}
              alt={`${title} thumbnail`}
              sizes="500px"
              fill
              placeholder="blur"
              blurDataURL={imagePath}
              className="not-prose absoute z-1 object-cover"
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
  contentPath,
  contentTypes = ["paper", "project"],
}: {
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
        title: item.frontMatter?.shortTitle || item.frontMatter?.title || item.title || "",
        description: item.frontMatter?.description,
        route: item.route,
        type: item.frontMatter?.type,
        imagePath: imagePath,
      };
    });

  return (
    <div
      className="grid auto-rows-[240px] grid-cols-1 gap-6"
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
        />
      ))}
    </div>
  );
}
