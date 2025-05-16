import { formatDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface CardProps {
  title: string;
  description?: string;
  route: string;
  imagePath?: string | null;
  tags: string[];
  date?: TDate;
}

export default async function Card({
  title,
  description,
  route,
  imagePath,
  tags,
  date,
}: CardProps) {
  return (
    <Link href={route.replace("/content", "")} prefetch={true} className="not-prose">
      <div
        className={twMerge([
          "group h-[230px] overflow-hidden rounded-xl border transition-all duration-300 ease-in-out hover:-translate-y-1",
          "border-gray-200 bg-transparent hover:border-gray-300 hover:shadow-lg",
          "dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.12)]",
          "relative mt-2",
        ])}>
        {imagePath && (
          <div className="relative z-1 h-[120px] w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
            <Image
              src={imagePath}
              alt={`${title} thumbnail`}
              sizes="500px"
              fill
              placeholder="empty"
              className="not-prose absoute z-1 scale-[110%] border-none object-cover"
              priority={true}
            />
            <div className="absolute inset-0 z-2 border-0 border-none bg-gradient-to-b from-transparent to-white transition-opacity duration-300 dark:from-black/10 dark:to-zinc-900" />
          </div>
        )}
        <div className="absolute bottom-0 z-1 flex flex-col gap-2 p-4">
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
