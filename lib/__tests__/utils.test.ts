import { assert, assertEquals, assertExists } from "$std/assert/mod.ts";
import { getPost, getPosts } from "@/lib/utils.ts";

Deno.test(`${getPosts.name} - private posts included`, async () => {
  const posts = await getPosts(true);

  assert(
    posts.some((post) => post.slug === "2017-06-28-hom-nay-la-mot-ngay-buon"),
  );
  assert;
});

Deno.test(`${getPosts.name} - private posts excluded`, async () => {
  const posts = await getPosts();

  assert(
    posts.every((post) => post.slug !== "2017-06-28-hom-nay-la-mot-ngay-buon"),
  );
});

Deno.test(`${getPost.name} - post exists`, async () => {
  const post = await getPost("2015-11-08-the-beginning-of-a-journey");

  assertExists(post);
});

Deno.test(`${getPost.name} - post doesn't exist`, async () => {
  const post = await getPost("something-not-existing");

  assertEquals(post, null);
});
