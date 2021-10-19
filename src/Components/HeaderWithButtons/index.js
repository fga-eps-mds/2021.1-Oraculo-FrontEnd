import React from "react";
import {
  Head,
  StyledDropDown,
  StyledHeaderImage,
  StyledOrganizeButtons,
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
          <StyledDropDown>
            <button onClick={handleAdmin}>Administrador</button>
            <div>
              <button onClick={() => {}}>Usuário</button>
              <button onClick={() => {}}>Departamento</button>
              <button onClick={() => {}}>Tag</button>
            </div>
          </StyledDropDown>
          <StyledDropDown>
            <button>Nome</button>
            <div>
              <button onClick={handleViewProfile}>Ver Perfil</button>
              <button onClick={handleClickCheckout}>Sair</button>
            </div>
          </StyledDropDown>
        </StyledOrganizeButtons>
      </Head>
    </>
  );
};

export default HeaderWithButtons;
