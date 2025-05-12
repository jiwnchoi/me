import { FullItem } from "@/components/items";
import { data } from "@/data";

const careers = data.careers().careers;

export default async function Careers() {
  return (
    <ol className="me-list gap-4">
      {careers.map((item) => {
        return (
          <FullItem
            key={`career-item-${item.id}`}
            dateFrom={item.from}
            dateTo={item.to}
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
