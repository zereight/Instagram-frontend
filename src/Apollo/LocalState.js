export const defaults = {
  isLoggedIn: localStorage.getItem("token") !== null ? true : false,
};

export const typeDefs = `
    type Mutation {
        logUser(token: String!):Boolean 
        logUserOut:Boolean
    }
`;

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    logUserOut: (_, __) => {
      localStorage.removeItem("token");
      window.locataion.reload();
      return null;
    },
  },
};
