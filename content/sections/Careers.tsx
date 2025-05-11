import { FullItem } from "@/components/items";
import { data } from "@/data";
import { formatDate } from "@/utils";

export default async function Careers() {
  const careers = data.careers().careers;

  return (
    <ol className="m-0 flex flex-col gap-6 p-0">
      {careers.map((item) => {
        return (
          <FullItem
            key={`career-item-${item.id}`}
            dateFrom={formatDate(item.from)}
            dateTo={item.to ? formatDate(item.to) : "Present"}
            location={item.location}
            heading={item.name}
            subheading={item.title}
            description={item.description}
          />
        );
      })}
    </ol>
  );
}
