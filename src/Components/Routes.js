import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth/index";
import Feed from "../Routes/Feed";

const LoggedInRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Feed} />
    </>
  );
};

const LoggedOutRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Auth} />
    </>
  );
};

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  );
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
