import { Handlers, PageProps } from "$fresh/server.ts";
import { render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import { Post } from "@/lib/types.ts";
import Container from "@/components/Container.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const response = await fetch(
      `${ctx.url.origin}/api/posts/${ctx.params.slug}`,
    );

    if (!response.ok) return ctx.renderNotFound();

    const post = await response.json() as Post;

    return ctx.render(post);
  },
};

const PostPage = (props: PageProps<Post>) => {
  const { data } = props;
  const { content, title } = data;

  return (
    <Container title={title}>
      <Head>
        <title>{title} - Việt Huỳnh - Blog</title>
      </Head>
      <article class="max-w-full prose">
        <div dangerouslySetInnerHTML={{ __html: render(content) }} />
      </article>
    </Container>
  );
};

export default PostPage;
