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
  function handleSeeAllFields() {
    history.push("/todos-os-campos");
    window.location.reload();
  }

  function handleHomePage() {
    history.push("/tela-inicial");
    window.location.reload();
  }

  function handleViewRegisters() {
    history.push("/visualizar-registros");
    window.location.reload();
  }

  function handleSeeDepartment() {
    history.push("/visualizar-departamentos");
    window.location.reload();
  }

  function handleSeeSections() {
    history.push("/visualizar-secoes");
    window.location.reload();
  }
  return (
    <>
      <Head>
        <StyledHeaderImage onClick={handleHomePage} src={Logo} />
        <StyledOrganizeButtons>
          {/* Buttons to redirect in web app */}
          <StyledDropDown>
            <button>Registros</button>
            <div style={{ textAlign: "center" }}>
              <button onClick={handleViewRegisters}>Todos os Registros</button>
              <button onClick={handleRegister}>Novo Registro</button>
            </div>
          </StyledDropDown>
          <StyledDropDown>
            <button>Administrador</button>
            <div style={{ textAlign: "center" }}>
              <button onClick={handleCreateUser}>Criar Usuário</button>
              <button onClick={handleSeeDepartment}>Ver Departamentos</button>
              <button onClick={handleSeeSections}>Ver Seções</button>
              <button onClick={() => {}}>Tag</button>
              <button onClick={handleSeeAllFields}>Campos</button>
            </div>
          </StyledDropDown>
          <StyledDropDown>
            <button>Nome</button>
            <div style={{ textAlign: "center" }}>
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
