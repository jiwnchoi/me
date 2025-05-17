interface DateProps extends React.HTMLAttributes<HTMLParagraphElement> {
  date: TDate;
  className?: string;
}
import { formatDate } from "@/utils";
import { twMerge } from "tailwind-merge";

export default function Date({ date, className, ...rest }: DateProps) {
  let from: string | null = null;
  let to: string | null = null;

  if (typeof date === "string") {
    from = date;
  } else if (typeof date === "object" && "from" in date && "to" in date) {
    from = date.from;
    to = date.to;
  }

  return (
    <div
      className={twMerge([
        "not-prose flex flex-row gap-1 text-zinc-500 italic md:flex-col md:gap-0 dark:text-zinc-400",
        className,
      ])}
      {...rest}>
      {from && to ? <span>{`${formatDate(from)}  —`}</span> : <span>{`${formatDate(from)}`}</span>}
      {to === "Present" ? (
        <span className="me-highlight px-1.5 py-0.5">─ Present</span>
      ) : (
        to && <span>{`${formatDate(to)}`}</span>
      )}
    </div>
  );
}
