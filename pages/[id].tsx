import { BlogContainer } from "@components/blog-container";
import { BlogHeader } from "@components/blog-header";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import path from "path";
import { getPostData, getSortedPostsData, Post } from "../lib/read-posts";

export default function Blogpost({ postData }: { postData: Post }) {
  const mdxComponents = {
    img: ({ src, alt }) => {
      return <img alt={alt} src={fixHrefAndSrc(src, postData)} />;
    },
    a: ({ href, children }) => {
      const isPDF = href.endsWith(".pdf");
      return (
        <a href={isPDF ? fixHrefAndSrc(href, postData) : href} target="_blank">
          {children}
        </a>
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

function fixHrefAndSrc(url: string, postData: Post) {
  return "/" + postData.foldername + url.replace("./", "/");
}
