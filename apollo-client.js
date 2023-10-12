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
  uri: process.env.APOLLO_URL,
  cache: new InMemoryCache(),
  defaultOptions,
});

export default client;
