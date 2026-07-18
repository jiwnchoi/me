import { Date, MDXContent } from "@/components";
import { SimpleItem } from "@/components/items";
import { data } from "@/data";

export default async function Scholarships() {
  const scholarships = data.misc().scholarships;

  return (
    <ol className="me-list">
      {scholarships.map((item) => {
        return (
          <SimpleItem
            key={`scholarships-item-${item.id}`}
            left={<Date date={item.date} />}
            right={
              <div className="flex flex-col gap-1">
                <p className="not-prose text-sm">
                  <span className="font-semibold">{item.title}</span>
                  <span>{`, ${item.name}`}</span>
                </p>
                {item.description && (
                  <div className="border-primary border-opacity-50 mt-1 mb-2 ml-0.5 border-l-2 pl-4 text-xs">
                    <MDXContent mdxSource={item.description} />
                  </div>
                )}
              </div>
            }
          />
        );
      })}
    </ol>
  );
}
