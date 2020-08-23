import React from "react";
import { gql } from "apollo-boost";
import GlobalStyles from "../Styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import { HashRouter as Router } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

export default () => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Wrapper>
          <Routes isLoggedIn={isLoggedIn} />
          <Footer />
        </Wrapper>
      </Router>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </ThemeProvider>
  );
};
