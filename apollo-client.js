import { ApolloClient, InMemoryCache } from "@apollo/client";
const defaultOptions = {
  watchQuery: {
    // fetchPolicy: "cache-and-network",
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    // fetchPolicy: "network-only",
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl21y31cg4c5u01z4fd5o11z6/master",
  cache: new InMemoryCache(),
  defaultOptions,
});

export default client;
