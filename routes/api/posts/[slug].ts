import { Handler } from "$fresh/server.ts";
import { getPost } from "@/lib/utils.ts";
import { Post } from "@/lib/types.ts";

export const handler: Handler<Post> = async (_req, ctx) => {
  const post = await getPost(ctx.params.slug);

  if (!post) return new Response(null, { status: 404 });

  return new Response(JSON.stringify(post), {
    headers: { "Content-Type": "application/json" },
  });
};
