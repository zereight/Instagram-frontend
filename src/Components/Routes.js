import React from "react";
// import { HashRouter, Route, Switch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth/index";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search/index";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Feed}></Route>
      <Route exact path="/explore" component={Explore}></Route>
      <Route exact path="/search" component={Search}></Route>
      <Route exact path="/:username" component={Profile}></Route>
    </Switch>
  );
};

const LoggedOutRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Auth}></Route>
    </Switch>
  );
};

const Router = ({ isLoggedIn }) => {
  return isLoggedIn ? LoggedInRoutes() : LoggedOutRoutes();
};

Router.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Router;
