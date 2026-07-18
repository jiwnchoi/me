import { PublicationItem } from "@/components/items";
import { data } from "@/data";

export default async function Publications() {
  const publications = data.publications().publications;

  return (
    <ol className="me-list gap-4">
      {publications.map((item) => {
        return <PublicationItem key={`pubitem-${item.id}`} {...item} />;
      })}
    </ol>
  );
}
