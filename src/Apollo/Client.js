import ApolloClient from "apollo-boost";
// import ApolloClient from "@apollo/react-hooks";
// import ApolloClient from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { createHttpLink } from "apollo-link-http";
import {
  defaults,
  resolvers,
  // typeDefs
} from "./LocalState";

export default new ApolloClient({
  uri: "http://localhost:4000/",
  clientState: {
    defaults: defaults,
    resolvers: resolvers,
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  //   typeDefs: typeDefs,
  //   cache: new InMemoryCache(),
});
