import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4onoovc0mjr01xk95ei3krj/master",
  cache: new InMemoryCache(),
});
