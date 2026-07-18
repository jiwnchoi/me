import { Date } from "@/components";
import { SimpleItem } from "@/components/items";
import { data } from "@/data";

export default async function News() {
  const news = data.news().news;

  return (
    <ol className="me-list gap-0.5">
      {news.map((item, i) => {
        return (
          <SimpleItem
            key={`news-item-${i}`}
            left={<Date date={item.date} />}
            right={item.description}
          />
        );
      })}
    </ol>
  );
}
