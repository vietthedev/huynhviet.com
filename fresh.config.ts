import manifest from "@/fresh.gen.ts";
import { defineConfig } from "$fresh/server.ts";
import { freshSEOPlugin } from "fresh-seo";
import tailwind from "$fresh/plugins/tailwind.ts";
import { POST_DIRECTORY } from "@/lib/constants.ts";

const files = Deno.readDir(POST_DIRECTORY);
const postSlugs: string[] = [];

for await (const file of files) {
  postSlugs.push(`blog/${file.name.replace(".md", "")}`);
}

export default defineConfig({
  plugins: [
    freshSEOPlugin(manifest, {
      include: postSlugs,
      exclude: ["/api/*"],
    }),
    tailwind(),
  ],
});
