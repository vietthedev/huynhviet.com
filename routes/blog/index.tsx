import { Head } from "$fresh/runtime.ts";
import Container from "@/components/Container.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "@/lib/types.ts";
import PostCard from "@/components/PostCard.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const response = await fetch(`${ctx.url.origin}/api/posts`);
    const posts = await response.json() as Post[];

    return ctx.render(posts);
  },
};

const Blog = (props: PageProps<Post[]>) => {
  const { data } = props;

  return (
    <Container title="Blog">
      <Head>
        <title>Việt Huỳnh - Blog</title>
      </Head>
      <section class="flex flex-col gap-y-16 [&>article:not(:last-child)]:border-b">
        {data.map((post) => <PostCard {...post} />)}
      </section>
    </Container>
  );
};

export default Blog;
