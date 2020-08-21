export const defaults = {
  isLoggedIn: localStorage.getItem("token") !== null ? true : false,
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeDate({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    logUserOut: (_, __) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    },
  },
};
