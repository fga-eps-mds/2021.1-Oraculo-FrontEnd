import React, { Component } from "react";
import LoginScreen from "./Pages/LoginScreen";
import AdminScreen from "./Pages/AdminScreen/";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./Auth/Auth";
import { history } from "./history";
import CreateProcess from "./Pages/CreateProcess";

const PrivateRoutes = ({ component: Component, ...prop }) => (
  <Route
    {...prop}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/login" component={() => <LoginScreen />} />
      <PrivateRoutes path="/admin-page" component={() => <AdminScreen />} />
      <PrivateRoutes
        path="/criar-processo"
        component={() => <CreateProcess />}
      />
      <Route exact path="/" component={() => <LoginScreen />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
