import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl21y31cg4c5u01z4fd5o11z6/master",
  cache: new InMemoryCache(),
});

export default client;
