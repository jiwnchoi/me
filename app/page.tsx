import { data } from "@/data";

export default function Page() {
  const authors = data.authors();

  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {JSON.stringify(authors)}
    </div>
  );
}
