import React, { useEffect, useState } from "react";
import {
  Head,
  StyledDropDown,
  StyledHeaderImage,
  StyledOrganizeButtons,
} from "./styles";
import Logo from "../../Assets/logo-white.svg";
import { history } from "../../history";
import { logout } from "../../Auth/Auth";
import { getInfoUser } from "../../Services/Axios/profileService";
import toast from "react-hot-toast";

const HeaderWithButtons = () => {
  const [isAdmin, setAdmin] = useState(false);
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

  function handleSeeAllUsers() {
    history.push("/visualizar-usuarios");
    window.location.reload();
  }

  function handleSeeAllTags() {
    history.push("/visualizar-tags");
    window.location.reload();
  }

  const [nameUser, setName] = useState("-");

  async function fetchUserData() {
    try {
      const user = await getInfoUser(toast);
      if (user === undefined) {
        window.location.reload();
      } else {
        // if user is admin, show some things
        // only admins can see
        if (user?.levels[0].name === "admin") {
          setAdmin(true);
        }
        // set the name of user to
        //show on the header
        setName(user?.name);
      }
    } catch (err) {
      console.log("Erro ao carregar os dados do usuário!", err);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

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
          {/* show this button only 
          for admin users */}
          {isAdmin ? (
            <StyledDropDown>
              <button>Administrador</button>
              <div>
                <button onClick={handleCreateUser}>Criar Usuário</button>
                <button onClick={handleSeeDepartment}>Ver Departamentos</button>
                <button onClick={handleSeeAllTags}>Tag</button>
                <button onClick={handleSeeAllFields}>Campos</button>
                <button onClick={handleSeeAllUsers}>Listar Usuários</button>
              </div>
            </StyledDropDown>
          ) : null}
          <StyledDropDown>
            <button>{nameUser}</button>
            <div
              style={{
                textAlign: "center",
                flexDirection: "column",
              }}
            >
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
