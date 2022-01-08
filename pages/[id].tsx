import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import path from "path";
import { getPostData, getSortedPostsData, Post } from "../lib/read-posts";
import { MDXRemote } from "next-mdx-remote";
import { BlogContainer } from "@components/blog-container";
import Head from "next/head";
import { BlogHeader } from "@components/blog-header";

export default function Blogpost({ postData }: { postData: Post }) {
  const mdxComponents = {
    img: ({ src, alt }) => {
      return (
        <img
          alt={alt}
          src={"/" + postData.foldername + src.replace("./", "/")}
        />
      );
    },
  };

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <BlogContainer>
        <BlogHeader {...postData} />
        <MDXRemote {...postData.mdxString} components={mdxComponents} />
      </BlogContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const postData = await getPostData(context.params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

async function getAllPostIds() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const posts = await getSortedPostsData(postsDirectory);
  return posts.map((post) => ({
    params: {
      id: post.slug,
    },
  }));
}
