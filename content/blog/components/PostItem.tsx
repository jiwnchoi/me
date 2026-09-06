import { Date, TagBadge } from "@/components";
import { contentImage } from "@/lib/content-images";
import Image from "next/image";
import Link from "next/link";
export default function PostItem({ post }: { post: PageMapItem }) {
  const teaserPath = contentImage(post.route, "teaser");
  const tags: string[] =
    typeof post.frontMatter?.tags === "string"
      ? [post.frontMatter?.tags]
      : (post.frontMatter?.tags ?? []);

  return (
    <li>
      <Link
        href={post.route.replace(/^\/content(?=\/|$)/, "")}
        className="-m-4 flex flex-col justify-between gap-4 rounded-lg p-4 transition-colors duration-300 hover:bg-zinc-100 sm:flex-row dark:hover:bg-zinc-800/50">
        <div className="flex flex-col gap-2">
          <Date date={post.frontMatter?.date} day={true} className="ml-0.5 text-sm" />
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p className="text-sm">{post.frontMatter?.description ?? ""}</p>
          <ul className="mt-1 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={`tag-${post.title}-${tag}`}>
                <TagBadge content={tag} />
              </li>
            ))}
          </ul>
        </div>
        {teaserPath && (
          <div className="relative h-24 w-36 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={teaserPath}
              alt={`thumbnail-${post.title}`}
              fill
              className="rounded-lg object-cover"
              unoptimized={teaserPath.startsWith("/api/asset/")}
            />
          </div>
        )}
      </Link>
    </li>
  );
}
