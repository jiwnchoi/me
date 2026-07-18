import { Date, MDXContent } from "@/components";
import { SimpleItem } from "@/components/items";
import { data } from "@/data";

export default async function Services() {
  const services = data.misc().services;
  const reviewerItems = services.filter((item) => item.title === "Reviewer");

  return (
    <ol className="me-list">
      {services.map((item) => {
        if (item.title === "Reviewer") {
          if (item.id !== reviewerItems[0]?.id) return null;

          return (
            <SimpleItem
              key="services-item-reviewer"
              left={item.title}
              right={reviewerItems.map((reviewer, index) => (
                <span key={reviewer.id}>
                  {index > 0 && ", "}
                  {reviewer.name}
                </span>
              ))}
            />
          );
        }

        return (
          <SimpleItem
            key={`services-item-${item.id}`}
            left={item.date && <Date date={item.date} />}
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
