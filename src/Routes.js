import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
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
import GenericBlueButton from "./Components/GenericBlueButton";

const PrivateRoutes = ({ component: Component, ...prop }) => (
  <Route
    {...prop}
    render={(props) =>
      // Check if the user has a valid token on his browser
      tokenCheck() ? (
        <Component {...props} />
      ) : (
        <>
          {
            //Show a pop-up to inform user that his session is expired
            toast(
              (t) => (
                <span style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "18px" }}>
                    {
                      // Check if user has a token in storage
                      isAuthenticated() ? "Sessão Expirada!" : "Acesso negado!"
                    }
                  </p>
                  <p>Para continuar realize login!</p>
                  <GenericBlueButton
                    title="Ok"
                    onClick={() => {
                      toast.dismiss(t.id);
                    }}
                  ></GenericBlueButton>
                </span>
              ),
              {
                //Set the duration of the pop-up
                duration: 10000000,
              }
            )
          }
          {/* Redirect the user to login-screen if it's not logged */}
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          <Toaster />
        </>
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/login" component={() => <LoginScreen history={history} />} />
      <PrivateRoutes
        exact
        path="/ver-registro/:id"
        component={() => <ViewRecord history={history} />}
      />
      <PrivateRoutes
        path="/tela-inicial"
        component={() => <HomePage history={history} />}
      />
      <PrivateRoutes path="/criar-registro" component={() => <CreateRecord />} />
      <PrivateRoutes path="/criar-usuario" component={() => <CreateUser />} />
      <PrivateRoutes path="/usuario" component={() => <ViewProfile />} />
      <PrivateRoutes path="/alterar-senha" component={() => <ChangePassword />} />
      <PrivateRoutes
        path="/visualizar-registros"
        component={() => <AllRegistersScreen />}
      />
      <PrivateRoutes
        path="/visualizar-departamentos"
        component={() => <AllDepartmentsScreen />}
      />
      <PrivateRoutes path="/todos-os-campos" component={() => <ViewAllFields />} />
      <PrivateRoutes path="/criar-departamento" component={() => <CreateDepartment />} />
      <PrivateRoutes path="/visualizar-usuarios" component={() => <ViewAllUsers />} />
      <PrivateRoutes path="/editar-registro/:id" component={() => <EditRecord />} />
      <Route exact path="/" component={() => <LoginScreen />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
