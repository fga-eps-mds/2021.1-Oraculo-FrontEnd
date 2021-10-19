import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { isAuthenticated } from "./Auth/Auth";
// import  from "./Pages/AdminScreen/";
import CreateProcess from "./Pages/CreateProcess";
import LoginScreen from "./Pages/LoginScreen";
import ViewProfile from "./Pages/ViewProfile";
import CreateUser from "./Pages/CreateUser";
import { history } from "./history";
import ViewRecord from "./Pages/ViewRecord";
import HomePage from "./Pages/HomePage";
import ChangePassword from "./Pages/ChangePassword";

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
      <Route
        exact
        path="/login"
        component={() => <LoginScreen history={history} />}
      />
      <Route exact path="/view-record" component={() => <ViewRecord />} />
      <PrivateRoutes path="/pagina-admin" component={() => <HomePage />} />
      <PrivateRoutes
        path="/criar-registro"
        component={() => <CreateProcess />}
      />
      <PrivateRoutes path="/criar-usuario" component={() => <CreateUser />} />
      <PrivateRoutes path="/perfil" component={() => <ViewProfile />} />
      <PrivateRoutes path="/user" component={() => <ViewProfile />} />
      <PrivateRoutes path="/change-password" component={() => <ChangePassword/>} />
      <Route exact path="/" component={() => <LoginScreen />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
