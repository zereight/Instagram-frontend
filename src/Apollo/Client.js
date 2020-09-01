import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

// yarn add graphql 필요
export default new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults,
    resolvers,
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
