import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { isAuthenticated } from "./Auth/Auth";
import CreateProcess from "./Pages/CreateProcess";
import LoginScreen from "./Pages/LoginScreen";
import ViewProfile from "./Pages/ViewProfile";
import CreateUser from "./Pages/CreateUser";
import { history } from "./history";
import ViewRecord from "./Pages/ViewRecord";
import HomePage from "./Pages/HomePage";
import ChangePassword from "./Pages/ChangePassword";
import ViewAllFields from "./Pages/ViewAllFields";

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
      <Route exact path="/ver-registro" component={() => <ViewRecord />} />
      <PrivateRoutes path="/tela-inicial" component={() => <HomePage />} />
      <PrivateRoutes
        path="/criar-registro"
        component={() => <CreateProcess />}
      />
      <PrivateRoutes path="/criar-usuario" component={() => <CreateUser />} />
      <PrivateRoutes path="/usuario" component={() => <ViewProfile />} />
      <PrivateRoutes
        path="/alterar-senha"
        component={() => <ChangePassword />}
      />
      <PrivateRoutes
        path="/todos-os-campos"
        component={() => <ViewAllFields />}
      />
      <Route exact path="/" component={() => <LoginScreen />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
