import { data } from "@/data";
import { compileMdx } from "nextra/compile";
import { MDXRemote } from "nextra/mdx-remote";

export default async function Page() {
  const meta = data.meta();

  return (
    <div>
      <MDXRemote compiledSource={await compileMdx(meta.bio)} />
    </div>
  );
}
