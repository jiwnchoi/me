import { data } from "@/data";

export default function Page() {
  const authors = data.authors();

  return (
    <div>
      <h1 className="text-3xl font-bold italic">Hello world!</h1>
      {JSON.stringify(authors)}
    </div>
  );
}
