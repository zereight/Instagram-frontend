import React from "react";
import PropTypes from "prop-types";
import { HashRouter, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

const LoggedInRoutes = () => {
  return <Route exact path="/" component={Auth} />;
};

const LoggedOutRoutes = () => {
  return <Route exact path="/" component={Feed} />;
};

const AppRouter = ({ isLoggedIn }) => {
  return (
    <HashRouter>
      <Switch>{!isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
    </HashRouter>
  );
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
