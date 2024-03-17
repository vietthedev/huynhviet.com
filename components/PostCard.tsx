import { Post } from "@/lib/types.ts";
import Link from "@/components/Link.tsx";

const PostCard = (props: Post) => {
  const { excerpt, publishedAt, slug, title } = props;

  return (
    <article class="pb-4">
      <Link href={`/blog/${slug}`}>
        <h3 class="text-3xl font-semibold">
          {title}
        </h3>
      </Link>
      <time class="italic text-gray-500">
        {new Date(publishedAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })}
      </time>
      <div class="mt-4 max-w-full prose">
        <p>
          {excerpt}
        </p>
        <p>
          <Link href={`/blog/${slug}`}>Read more</Link>
        </p>
      </div>
    </article>
  );
};

export default PostCard;
