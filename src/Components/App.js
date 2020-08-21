import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";
import Router from "./Router";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyles />
          <Router isLoggedIn={false} />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
