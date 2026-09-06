import { formatDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import TagBadge from "./TagBadge";

interface CardProps {
  title: string;
  description?: string;
  route: string;
  imagePath?: string | null;
  tags: string[];
  date?: TDate;
}
export default function Card({ title, description, route, imagePath, tags, date }: CardProps) {
  return (
    <Link
      href={route.replace(/^\/content(?=\/|$)/, "") || "/"}
      className="not-prose group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
      {imagePath && (
        <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={imagePath}
            alt={`${title} thumbnail`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 400px"
            unoptimized={imagePath.startsWith("/api/asset/")}
            className="object-cover transition-transform motion-safe:group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-base font-bold break-words">{title}</h3>
        {description && (
          <p className="line-clamp-3 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
        )}
        {tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <TagBadge key={tag} content={tag} />
            ))}
          </div>
        )}
        {date && <p className="text-xs text-zinc-600 dark:text-zinc-400">{formatDate(date)}</p>}
      </div>
    </Link>
  );
}
