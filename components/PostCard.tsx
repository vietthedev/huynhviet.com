import { render } from "$gfm";
import Link from "@/components/Link.tsx";
import { Post } from "@/lib/types.ts";
import { formatPostDate } from "@/lib/utils.ts";

const PostCard = (props: Post) => {
  const { excerpt, publishedAt, slug, title } = props;

  return (
    <article class="flex flex-col pb-4">
      <Link class="w-fit" href={`/blog/${slug}`}>
        <h2 class="w-fit text-2xl font-semibold">
          {title}
        </h2>
      </Link>
      <time
        class="italic text-gray-500"
        datetime={new Date(publishedAt).toISOString()}
      >
        {formatPostDate(publishedAt)}
      </time>
      <section class="max-w-full prose">
        <p dangerouslySetInnerHTML={{ __html: render(excerpt) }} />
        <Link href={`/blog/${slug}`}>Read more</Link>
      </section>
    </article>
  );
};

export default PostCard;
