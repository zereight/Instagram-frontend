export const defaults = {
  isLoggedIn: localStorage.getItem("token") !== null ? true : false,
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token);
      cache.writeData({
        // 즉시 isLoggedIn가 변경되면서 페이지에 적용됨.
        data: {
          isLoggedIn: true,
        },
      });

      return;
    },
    logUserOut: () => {
      localStorage.removeItem("token");
      window.location = "/";
      return;
    },
  },
};
