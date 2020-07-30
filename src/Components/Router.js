import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import Feed from "../Routes/Feed";

const LoggedInRoutes = () => {
  <>
    <Route exact path="/" component={Feed}></Route>
  </>;
};

const LoggedOutRouters = () => {
  <>
    <Route exact path="/" component={Auth}></Route>
  </>;
};

const AppRouter = ({ isLoggedIn }) => {
  <Router>
    <Switch>
      (isLoggendIn ? <LoggedInRoutes /> : <LoggedOutRouters />)
    </Switch>
  </Router>;
};

AppRouter.prototype = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
