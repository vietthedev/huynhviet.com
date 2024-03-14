import { Handlers } from "$fresh/server.ts";
import { getPosts } from "@/lib/utils.ts";

export const handler: Handlers = {
  async GET() {
    const posts = await getPosts();

    return new Response(JSON.stringify(posts), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
