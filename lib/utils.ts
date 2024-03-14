import { extract } from "$std/front_matter/yaml.ts";
import { join } from "$std/path/posix/mod.ts";
import { Post } from "@/lib/types.ts";

const POST_DIRECTORY = "./posts";

export const getPosts = async (includesPrivate = false): Promise<Post[]> => {
  const files = Deno.readDir(POST_DIRECTORY);
  const promises: Promise<Post>[] = [];

  for await (const file of files) {
    const slug = file.name.replace(".md", "");

    promises.push(getPost(slug) as Promise<Post>);
  }

  let posts = await Promise.all(promises);

  if (!includesPrivate) {
    posts = posts.filter((post) => !post.private);
  }

  return posts.toSorted((a, b) =>
    b.publishedAt.getTime() - a.publishedAt.getTime()
  );
};

export const getPost = async (slug: string): Promise<Post | null> => {
  const text = await Deno.readTextFile(join(POST_DIRECTORY, `${slug}.md`));
  const { attrs, body } = extract<Post>(text);

  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.publishedAt),
    content: body,
    excerpt: attrs.excerpt,
    private: attrs.private,
  };
};
