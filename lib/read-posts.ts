import fs from "fs/promises";
import matter from "gray-matter";
import invariant from "tiny-invariant";
import fg from "fast-glob";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import path from "path";
import rehypePrism from "rehype-prism-plus";
import { createSlug } from "./create-slug";

export type PostMarkdownAttributes = {
  title: string;
  date: Date;
  cover_image: string;
  description: string;
};

export type Post = PostMarkdownAttributes & {
  foldername: string;
  slug: string;
  mdxString: MDXRemoteSerializeResult<Record<string, unknown>>;
};

export async function getSortedPostsData(directory: string): Promise<Post[]> {
  // Get file names under /posts

  const mdFiles = await fg(`${directory}/**/*.md`);

  const posts: Post[] = [];

  for (const file of mdFiles) {
    const fileContents = await fs.readFile(file, "utf8");
    const { data, content } = matter(fileContents);
    invariant(isValidPostAttributes(data), `${file} is not a valid post.`);
    const mdxString = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [rehypePrism as any],
      },
    });

    posts.push({
      foldername: path.relative(directory, path.dirname(file)),
      slug: createSlug(data.title),
      ...data,
      mdxString,
    });
  }

  return posts.sort(sortByNewestFirst);
}

export async function getPostData(slug: string): Promise<Post> {
  const posts = await getSortedPostsData("posts");
  const post = posts.find((post) => post.slug === slug);
  invariant(post, `No post found for slug: ${slug}`);
  return post;
}

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return (
    attributes?.title &&
    attributes?.date &&
    attributes?.cover_image &&
    attributes?.description
  );
}

function sortByNewestFirst({ date: a }, { date: b }) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
}
