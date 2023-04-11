import { type NextPage } from "next";
import Head from "next/head";
import ProjectCard from "~/components/ProjectCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Delta</title>
        <meta name="description" content="A Hackathon-Oriented Team" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex min-h-screen flex-col justify-start bg-[#1E1E1E] pl-[128px] pr-[128px]">
        <div className="flex h-screen flex-col items-center justify-start">
          <header className="relative flex flex-col">
            <h1 className="mt-20 font-serif text-[15rem] tracking-tighter text-[#262626]">
              DELTA
            </h1>
            <img
              src="/favicon.svg"
              alt=""
              className="absolute bottom-[5%] left-[48%] h-44 translate-x-[-50%] blur-[1.5px] filter"
            />
          </header>
        </div>
        <div className="ml-6 mt-12 font-serif text-[#373737]">
          <p>Our Projects</p>
        </div>
      </main>
    </>
  );
};

export default Home;
