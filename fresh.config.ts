import manifest from "@/fresh.gen.ts";
import { defineConfig } from "$fresh/server.ts";
import { freshSEOPlugin } from "fresh-seo";
import tailwind from "$fresh/plugins/tailwind.ts";
import { POST_DIRECTORY } from "@/lib/constants.ts";
import { getFiles } from "@/lib/utils.ts";

export default defineConfig({
  plugins: [
    freshSEOPlugin(manifest, {
      include: (await getFiles(POST_DIRECTORY)).map((file) =>
        `blog/${file.name.replace(".md", "")}`
      ),
      exclude: ["/api/*"],
    }),
    tailwind(),
  ],
});
