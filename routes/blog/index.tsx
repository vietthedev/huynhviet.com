import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { handler as postsHandler } from "@/routes/api/posts/index.ts";
import Container from "@/components/Container.tsx";
import { Post } from "@/lib/types.ts";
import PostCard from "@/components/PostCard.tsx";
import Metadata from "@/components/Metadata.tsx";

export const handler: Handlers<Post[]> = {
  async GET(req, ctx) {
    const { GET: getPosts } = postsHandler;
    const response = await getPosts!(req, ctx);
    const posts = await response.json();

    return ctx.render(posts);
  },
};

const Blog = (props: PageProps<Post[]>) => {
  const { data, url } = props;

  return (
    <Container title="Blog">
      <Head>
        <Metadata
          description="A place where I tell my stories"
          og={{
            title: "Việt Huỳnh - Blog",
            description: "A place where I tell my stories",
            type: "website",
            url: url.origin + url.pathname,
          }}
          title="Việt Huỳnh - Blog"
          url={url}
        />
        <title>Việt Huỳnh - Blog</title>
      </Head>
      <section class="flex flex-col gap-y-16 [&>article:not(:last-child)]:border-b">
        {data.map((post) => <PostCard {...post} />)}
      </section>
    </Container>
  );
};

export default Blog;
