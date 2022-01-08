import path from "path";
import { expect, test } from "vitest";
import { getSortedPostsData } from "./read-posts";

const testPostsDirectory = path.join(process.cwd(), "lib", "test-posts");

test("Reads posts from directory", async () => {
  const posts = await getSortedPostsData(testPostsDirectory);
  expect(posts.length).toBe(2);
  expect(posts[0].slug).toBe("hello-world");
  expect(posts[1].slug).toBe("other-post");
});

test("Create mdx string", async () => {
  const posts = await getSortedPostsData(testPostsDirectory);
  expect(posts.length).toBe(2);
  expect(posts[0].mdxString.compiledSource).toContain("This is a test");
});

test("Reads foldername", async () => {
  const posts = await getSortedPostsData(testPostsDirectory);
  expect(posts.length).toBe(2);
  expect(posts[0].foldername).toBe("hello-world");
});
