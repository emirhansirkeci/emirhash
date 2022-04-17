import Head from "next/head";
import Hero from "../components/Hero";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
