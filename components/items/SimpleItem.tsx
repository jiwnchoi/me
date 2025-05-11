import MDXContent from "../MDXContent";

interface SimpleItemProps extends React.HTMLAttributes<HTMLLIElement> {
  left: string | React.ReactNode;
  right: string | React.ReactNode;

  leftProps?: React.HTMLAttributes<HTMLDivElement>;
  rightProps?: React.HTMLAttributes<HTMLDivElement>;
}

export default async function SimpleItem(props: SimpleItemProps) {
  const { left, right, leftProps, rightProps, ...rest } = props;
  return (
    <li className="m-0 my-0 mt-0 mb-0 flex gap-4 p-0" {...rest}>
      <div
        {...leftProps}
        className="w-[72px] min-w-[72px] text-sm font-semibold text-gray-500 dark:text-gray-400">
        {typeof left === "string" ? <MDXContent mdxSource={left} /> : left}
      </div>
      <div {...rightProps} className="text-sm text-gray-700 dark:text-gray-300">
        {typeof right === "string" ? <MDXContent mdxSource={right} /> : right}
      </div>
    </li>
  );
}
