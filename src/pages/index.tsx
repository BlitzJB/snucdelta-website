import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Delta</title>
        <meta name="description" content="A Hackathon-Oriented Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#1E1E1E]">
        <h1>Delta</h1>
      </main>
    </>
  );
};

export default Home;
