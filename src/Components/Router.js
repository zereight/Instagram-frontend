import React from "react";
import PropTypes from "prop-types";
import { HashRouter, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth/AuthContainer";
import Feed from "../Routes/Feed";

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Auth} />
    </Switch>
  );
};

const LoggedOutRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Feed} />
    </Switch>
  );
};

const AppRouter = ({ isLoggedIn }) => {
  return !isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
