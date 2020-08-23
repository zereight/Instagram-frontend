import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth/index";

const LoggedInRoutes = () => {
  return <Route exact path="/" component={Feed}></Route>;
};

const LoggedOutRoutes = () => {
  return <Route exact path="/" component={Auth}></Route>;
};

const Router = ({ isLoggedIn }) => {
  return (
    <HashRouter>
      <Switch>{isLoggedIn ? LoggedInRoutes() : LoggedOutRoutes()}</Switch>
    </HashRouter>
  );
};

Router.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Router;
