import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

function App() {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppRouter isLoggedIn={isLoggedIn} />
    </ThemeProvider>
  );
}

export default App;
