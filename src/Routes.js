import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { isAuthenticated } from "./Auth/Auth";
import AdminScreen from "./Pages/AdminScreen/";
import CreateRecord from "./Pages/CreateRecord";
import LoginScreen from "./Pages/LoginScreen";
import ViewProfile from "./Pages/ViewProfile";
import CreateUser from "./Pages/CreateUser";
import { history } from "./history";
import ViewRecord from "./Pages/ViewRecord";
import ChangePassword from "./Pages/ChangePassword";

const PrivateRoutes = ({ component: Component, ...prop }) => (
  <Route
    {...prop}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/login" component={() => <LoginScreen history={history} />} />
      <Route exact path="/view-record" component={() => <ViewRecord />} />
      <PrivateRoutes path="/admin-page" component={() => <AdminScreen />} />
      <PrivateRoutes path="/criar-registro" component={() => <CreateRecord />} />
      <PrivateRoutes path="/criar-usuario" component={() => <CreateUser />} />
      <PrivateRoutes path="/user" component={() => <ViewProfile />} />
      <PrivateRoutes path="/change-password" component={() => <ChangePassword />} />
      <Route exact path="/" component={() => <LoginScreen />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
