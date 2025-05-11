import { SimpleItem } from "@/components/items";
import { data } from "@/data";
import { format, parse } from "date-fns";

export default async function News() {
  const news = data.news().news;

  return (
    <ol className="m-0 flex flex-col gap-2 p-0">
      {news.map((item, i) => {
        const parsedDate = parse(item.date, "yyyy.MM.dd", new Date());
        const formattedDate = format(parsedDate, "MMM. yyyy");
        return <SimpleItem key={`news-item-${i}`} left={formattedDate} right={item.description} />;
      })}
    </ol>
  );
}
