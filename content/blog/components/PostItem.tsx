import { Date } from "@/components";
import { existsSync } from "fs";
import Image from "next/image";
import Link from "next/link";
import path from "path";

function getTeaserImagePath(route: string) {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  const imagePaths = imageExtensions.map((ext) => `${route}/teaser${ext}`);
  const foundPath = imagePaths.find((imagePath) => existsSync(path.join(process.cwd(), imagePath)));
  return foundPath ? `/api/asset${foundPath}` : null;
}

export default function PostItem({ post }: { post: PageMapItem }) {
  const teaserPath = getTeaserImagePath(post.route);

  return (
    <Link href={post.route.replace("/content", "")} target="_self">
      <li className="flex justify-between gap-8 rounded-lg p-4 transition-colors duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50">
        <div className="flex flex-col gap-2">
          <Date date={post.frontMatter?.date} day={true} className="ml-0.5 text-xs" />
          <h3 className="text-lg">{post.title}</h3>
          <p className="text-sm">{post.frontMatter?.description ?? ""}</p>
        </div>
        <div className="relative h-24 w-36 flex-shrink-0 overflow-hidden rounded-lg">
          {teaserPath && (
            <Image
              src={teaserPath}
              alt={`thumbnail-${post.title}`}
              fill
              className="rounded-lg object-cover"
            />
          )}
        </div>
      </li>
    </Link>
  );
}
