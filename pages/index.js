import Head from "next/head";
import Hero from "../components/Hero";
import client from "../apollo-client";
import { gql } from "@apollo/client";

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Emirhash</title>
        <meta name="description" content="Emirhash personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Hero projects={projects} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query AllData {
        projects {
          image {
            url
          }
          link
          name
          role
          id
          details {
            id
            name
            type
            standard
            utils
            network
            backend
            github
            contract
            notes {
              text
            }
          }
        }
      }
    `,
  });

  const { projects } = data;

  return {
    props: { projects },
    revalidate: 3600,
  };
};
