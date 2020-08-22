import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      Hello
    </ThemeProvider>
  );
};
