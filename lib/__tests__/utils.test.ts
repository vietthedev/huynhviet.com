import { assert, assertEquals, assertExists } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

import { getPost, getPosts } from "@/lib/utils.ts";

describe(getPosts.name, () => {
  it("should include private posts", async () => {
    const posts = await getPosts(true);

    assert(
      posts.some((post) => post.slug === "2017-06-28-hom-nay-la-mot-ngay-buon"),
    );
  });

  it("should not include private posts", async () => {
    const posts = await getPosts();

    assert(
      posts.every((post) =>
        post.slug !== "2017-06-28-hom-nay-la-mot-ngay-buon"
      ),
    );
  });
});

describe(getPost.name, () => {
  it("should return existing post", async () => {
    const post = await getPost("2015-11-08-the-beginning-of-a-journey");

    assertExists(post);
  });

  it("should return null for non-existing post", async () => {
    const post = await getPost("something-not-existing");

    assertEquals(post, null);
  });
});
