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

  function handleClickCheckout() {
    logout();
    history.push("/login");
    window.location.reload();
  }

  function handleViewProfile() {
    history.push("/usuario");
    window.location.reload();
  }

  function handleCreateUser() {
    history.push("/criar-usuario");
    window.location.reload();
  }

  function handleChangePassword() {
    history.push("/alterar-senha");
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
            <button>Administrador</button>
            <div>
              <button onClick={handleCreateUser}>Criar Usuário</button>
              <button onClick={() => {}}>Departamento</button>
              <button onClick={() => {}}>Tag</button>
            </div>
          </StyledDropDown>
          <StyledDropDown>
            <button>Nome</button>
            <div>
              <button onClick={handleViewProfile}>Ver Perfil</button>
              <button onClick={handleChangePassword}>Nova Senha</button>
              <button onClick={handleClickCheckout}>Sair</button>
            </div>
          </StyledDropDown>
        </StyledOrganizeButtons>
      </Head>
    </>
  );
};

export default HeaderWithButtons;
