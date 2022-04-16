import Head from "next/head";
import { Container } from "@nextui-org/react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emirhash</title>
        <meta name="description" content="Emirhash personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Hero />
      </div>
    </div>
  );
}
