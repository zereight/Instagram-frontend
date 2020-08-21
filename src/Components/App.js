import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import GlobalStyles from "../Styles/GlobalStyles";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
      </ThemeProvider>
    );
  }
}

export default App;
