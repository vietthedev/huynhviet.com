import { Post } from "@/lib/types.ts";
import Link from "@/components/Link.tsx";
import Paragraph from "@/components/Typography/Paragraph.tsx";

const PostCard = (props: Post) => {
  const { excerpt, publishedAt, slug, title } = props;

  return (
    <article class="w-full flex flex-col">
      <Link href={`/blog/${slug}`}>
        <h3 class="text-3xl font-bold">
          {title}
        </h3>
      </Link>
      <time class="italic text-gray-500">
        {new Date(publishedAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <Paragraph>
        {excerpt}
      </Paragraph>
      <Paragraph>
        <Link href={`/blog/${slug}`}>Read more</Link>
      </Paragraph>
    </article>
  );
};

export default PostCard;
