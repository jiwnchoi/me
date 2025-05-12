import { Date } from "@/components";
import { SimpleItem } from "@/components/items";
import { data } from "@/data";

const services = data.misc().services;

export default async function Services() {
  return (
    <ol className="me-list">
      {services.map((item) => {
        return (
          <SimpleItem
            key={`services-item-${item.id}`}
            left={<Date from={item.date} />}
            right={
              <div className="flex flex-col gap-1">
                <p className="not-prose text-base">
                  <span className="font-semibold">{item.title}</span>
                  <span>{`, ${item.name}`}</span>
                </p>
                <p className="not-prose text-sm">{item.description}</p>
              </div>
            }
          />
        );
      })}
    </ol>
  );
}
