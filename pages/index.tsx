import { getSortedPostsData, Post } from "lib/read-posts";
import { GetStaticProps } from "next";
import Head from "next/head";
import path from "path";
import { PostPreviewCard } from "../components/PostPreviewCard";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Chris Kohler</title>
      </Head>

      <main className="container w-full md:max-w-6xl mx-auto p-8">
        <div className="mb-16 lg:mb-28 tracking-wider lg:leading-tight text-4xl lg:text-5xl font-light font-hero max-w-xl lg:max-w-3xl ">
          <b className="font-bold">Hi, I am Chris</b>, I live in Zurich,
          Switzerland. I am a software engineer with a{" "}
          <b className="font-bold">passion for JavaScript</b> and Web
          Technologies.
        </div>

        <h2 className="font-normal">Latest Articles</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <PostPreviewCard post={post} key={index}></PostPreviewCard>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const posts = await getSortedPostsData(postsDirectory);

  return {
    props: {
      posts,
    },
  };
};
