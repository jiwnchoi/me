interface DateProps extends React.HTMLAttributes<HTMLParagraphElement> {
  from?: string;
  to?: string;
  className?: string;
}
import { formatDate } from "@/utils";

export default function Date({ from, to, className, ...rest }: DateProps) {
  return (
    <p className={`not-prose text-gray-500 italic dark:text-gray-400 ${className}`} {...rest}>
      {from && <span>{formatDate(from)}</span>}
      {to && <span> ─ </span>}
      {to === "Present" ? (
        <span className="bg-primary text-primary-content rounded-md px-1.5 py-0.5 font-semibold">
          Present
        </span>
      ) : (
        to && <span>{formatDate(to)}</span>
      )}
    </p>
  );
}
