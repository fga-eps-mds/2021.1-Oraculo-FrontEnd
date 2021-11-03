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

  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      const user = await getInfoUser(toast);
      setName(user.name);
    }
    fetchUserData();
  });

  return (
    <>
      <Head>
        <StyledHeaderImage onClick={handleHomePage} src={Logo} />
        <StyledOrganizeButtons>
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
              <button onClick={() => {}}>Criar Departamento</button>
              <button onClick={() => {}}>Tag</button>
              <button onClick={handleSeeAllFields}>Campos</button>
            </div>
          </StyledDropDown>
          <StyledDropDown>
            <button>{name}</button>
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
