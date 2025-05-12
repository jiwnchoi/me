interface DateProps extends React.HTMLAttributes<HTMLParagraphElement> {
  from?: string;
  to?: string;
  className?: string;
}
import { formatDate } from "@/utils";

export default function Date({ from, to, className, ...rest }: DateProps) {
  return (
    <p
      className={`not-prose text-xs text-gray-500 italic md:text-base dark:text-gray-400 ${className}`}
      {...rest}>
      {from && <span>{formatDate(from)}</span>}
      {to && <span> ─ </span>}
      {to === "Present" ? (
        <span className="me-highlight px-1.5 py-0.5">Present</span>
      ) : (
        to && <span>{formatDate(to)}</span>
      )}
    </p>
  );
}
