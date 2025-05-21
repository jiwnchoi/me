import { getTimeStamp } from "@/utils";
import { getPageMap } from "nextra/page-map";
import PostItem from "./components/PostItem";

export default async function Page() {
  const _posts = ((await getPageMap("/content/blog/posts")) as PageMapItem[]).sort(
    (a, b) => getTimeStamp(b.frontMatter?.date) - getTimeStamp(a.frontMatter?.date),
  );
  const posts = [..._posts, ..._posts, ..._posts, ..._posts, ..._posts];

  return (
    <ul className="not-prose -m-2 md:-m-4">
      {posts.map((post) => (
        <PostItem key={`post-item-${post.route}`} post={post} />
      ))}
    </ul>
  );
}
