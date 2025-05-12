import Date from "../Date";
import MDXContent from "../MDXContent";

interface FullItemProps extends React.HTMLAttributes<HTMLLIElement> {
  heading: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  dateFrom?: string;
  dateTo?: string;
  location?: string;
  description?: string;
}

export default async function FullItem(props: FullItemProps) {
  const { heading, subheading, dateFrom, dateTo, location, description, ...rest } = props;

  return (
    <li className="m-0 my-0 mt-0 mb-0 flex flex-col gap-1 p-0" {...rest}>
      <div className="flex justify-between">
        <div className="flex flex-col">
          {typeof heading === "string" ? <MDXContent mdxSource={`### ${heading}`} /> : heading}
          {typeof subheading === "string" ? (
            <MDXContent mdxSource={subheading} className="italic" />
          ) : (
            subheading
          )}
        </div>
        <div className="flex flex-col items-end">
          <Date from={dateFrom} to={dateTo} />
          {location && (
            <p className="not-prose text-sm text-gray-500 italic dark:text-gray-400">{location}</p>
          )}
        </div>
      </div>
      <div className="border-primary border-opacity-50 mt-2 border-l-2 pl-4 text-sm">
        {description && <MDXContent mdxSource={description} />}
      </div>
    </li>
  );
}
