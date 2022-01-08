import { Footer } from "./footer";
import { Navbar } from "./navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css`}
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
