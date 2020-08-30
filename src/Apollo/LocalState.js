export const defaults = {
  isLoggedIn: localStorage.getItem("token") !== null ? true : false,
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      console.log(cache);
      localStorage.setItem("token", token);

      return;
    },
    logUserOut: () => {
      localStorage.removeItem("token");
      window.location = "/";
      return;
    },
  },
};
