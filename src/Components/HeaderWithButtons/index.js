import React from "react";
import GenericBlueButton from "../../Components/GenericBlueButton";
import {
  Head,
  StyledHeaderImage,
  StyledOrganizeButtons,
  StyledCircleButton,
} from "./styles";
import Logo from "../../Assets/logo-white.svg";
import { history } from "../../history";
import { logout } from "../../Auth/Auth";

const HeaderWithButtons = () => {
  function handleRegister() {
    history.push("/criar-registro");
    window.location.reload();
  }

  function handleAdmin() {
    history.push("/admin-page");
    window.location.reload();
  }

  function handleClickCheckout() {
    logout();
    history.push("/login");
    window.location.reload();
  }

  function handleViewProfile() {
    history.push("/user");
    window.location.reload();
  }

  return (
    <>
      <Head>
        <StyledHeaderImage src={Logo} />
        <StyledOrganizeButtons>
          <button>Registros</button>
          <button onClick={handleRegister}>Novo Registro</button>
          <button>Departamento</button>
          <button onClick={handleAdmin}>Administrador</button>
          <button onClick={handleViewProfile}>Ver Perfil</button>
          <button onClick={handleClickCheckout}>Sair</button>
        </StyledOrganizeButtons>
      </Head>
    </>
  );
};

export default HeaderWithButtons;
