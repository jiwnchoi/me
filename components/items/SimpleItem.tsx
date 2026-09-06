import { twMerge } from "tailwind-merge";
import MDXContent from "../MDXContent";

interface SimpleItemProps extends React.HTMLAttributes<HTMLLIElement> {
  left?: string | React.ReactNode;
  right?: string | React.ReactNode;

  leftProps?: React.HTMLAttributes<HTMLDivElement>;
  rightProps?: React.HTMLAttributes<HTMLDivElement>;
}

export default async function SimpleItem(props: SimpleItemProps) {
  const { left, right, leftProps, rightProps, className, ...rest } = props;
  return (
    <li
      className={twMerge([
        "flex flex-col gap-1 pl-0 md:mt-0 md:flex-row md:items-baseline md:gap-4",
        className,
      ])}
      {...rest}>
      {left && (
        <div
          {...leftProps}
          className={twMerge(
            "w-fit text-start text-sm font-semibold text-zinc-500 md:w-20 md:min-w-20 md:text-end dark:text-zinc-400",
            leftProps?.className,
          )}>
          {typeof left === "string" ? <MDXContent mdxSource={left} /> : left}
        </div>
      )}
      {right && (
        <div
          {...rightProps}
          className={twMerge("mb-2 min-w-0 text-sm md:mb-0", rightProps?.className)}>
          {typeof right === "string" ? <MDXContent mdxSource={right} /> : right}
        </div>
      )}
    </li>
  );
}
