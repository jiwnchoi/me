import { SimpleItem } from "@/components/items";
import { data } from "@/data";

export default async function Skills() {
  const skills = data.skills().skills;

  return (
    <ol className="me-list gap-1">
      {skills.map((item, i) => {
        return <SimpleItem key={`skills-item-${i}`} left={item.type} right={item.description} />;
      })}
    </ol>
  );
}
