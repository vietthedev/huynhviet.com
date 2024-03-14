import { Handlers } from "$fresh/server.ts";
import { getPost } from "@/lib/utils.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);

    if (!post) return new Response(null, { status: 404 });

    return new Response(JSON.stringify(post), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
