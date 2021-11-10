import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { isAuthenticated, tokenCheck } from "./Auth/Auth";
import CreateRecord from "./Pages/CreateRecord";
import LoginScreen from "./Pages/LoginScreen";
import ViewProfile from "./Pages/ViewProfile";
import CreateUser from "./Pages/CreateUser";
import { history } from "./history";
import ViewRecord from "./Pages/ViewRecord";
import HomePage from "./Pages/HomePage";
import ChangePassword from "./Pages/ChangePassword";
import AllRegistersScreen from "./Pages/AllRegistersScreen";
import AllDepartmentsScreen from "./Pages/AllDepartmentsScreen";
import ViewAllFields from "./Pages/ViewAllFields";
import CreateDepartment from "./Pages/CreateDepartment";
import ViewAllUsers from "./Pages/ViewAllUsers";
import EditRecord from "./Pages/EditRecord";

const PrivateRoutes = ({ component: Component, ...prop }) => (
  <Route
    {...prop}
    render={(props) =>
      tokenCheck() ? (
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
      <PrivateRoutes
        exact
        path="/ver-registro/:id"
        component={() => <ViewRecord />}
      />
      <PrivateRoutes path="/tela-inicial" component={() => <HomePage />} />
      <PrivateRoutes
        path="/criar-registro"
        component={() => <CreateRecord />}
      />
      <PrivateRoutes path="/criar-usuario" component={() => <CreateUser />} />
      <PrivateRoutes path="/usuario" component={() => <ViewProfile />} />
      <PrivateRoutes
        path="/alterar-senha"
        component={() => <ChangePassword />}
      />
      <PrivateRoutes
        path="/visualizar-registros"
        component={() => <AllRegistersScreen />}
      />
      <PrivateRoutes
        path="/visualizar-departamentos"
        component={() => <AllDepartmentsScreen />}
      />
      <PrivateRoutes
        path="/todos-os-campos"
        component={() => <ViewAllFields />}
      />
      <PrivateRoutes
        path="/criar-departamento"
        component={() => <CreateDepartment />}
      />
      <PrivateRoutes
        path="/visualizar-usuarios"
        component={() => <ViewAllUsers />}
      />
      <PrivateRoutes
        path="/editar-registro/:id"
        component={() => <EditRecord />}
      />
      <Route exact path="/" component={() => <LoginScreen />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
