import React, { useState } from "react";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import MainButton from "../../Components/MainButton";
import toast, { Toaster } from "react-hot-toast";
import { history } from "../../history";
import {
  StyledTitle,
  StyledBottom,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledSearchBarSize,
  StyledPage,
  StyledTop,
  StyledFooter,
  ButtonDiv,
} from "./styles";
import { listAllUsers } from "../../Services/Axios/profileService";
import PocketUser from "../../Components/PocketUser";
import { GrFormSearch } from "react-icons/gr";
import { StyledSearchBar } from "../HomePage/styles";

const ViewAllUsers = () => {
  const [users, setUsers] = useState([]);
  /* Estadi para termo de procura */
  const [searchTerm, setSearchTerm] = useState("");

  const receiveUsers = async () => {
    setUsers(await listAllUsers(toast));
  };

  window.onload = function () {
    receiveUsers();
  };

  function handleCreateUser() {
    history.push("/criar-usuario");
    window.location.reload();
  }

  return (
    <>
      <HeaderWithButtons />
      <StyledPage>
        <StyledTitle>Usuários</StyledTitle>
        <StyledTop>
          <StyledSearchBarSize>
            {/* Fazer botão atualizar ver todos usuarios */}
            <StyledSearchBar>
              <button>
                <GrFormSearch size="3rem" />
              </button>
              <input
                id="searchText"
                type="text"
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </StyledSearchBar>
          </StyledSearchBarSize>
          <ButtonDiv>
            <MainButton onClick={handleCreateUser} title={"Criar Usuário"} />
          </ButtonDiv>
        </StyledTop>
        <StyledBottom>
          <StyledOrganizeButtons>
            <StyledBigButton>Nome</StyledBigButton>
            <StyledBigButton>Email</StyledBigButton>
          </StyledOrganizeButtons>
          {users ? (
            // Termo de pesquisa e lista de usuários para mapa
            <PocketUser searchTerm={searchTerm} user={users} />
          ) : (
            <StyledTitle>Não há usuários cadastrados</StyledTitle>
          )}
          <StyledFooter>
            <StyledBigButton>Nome</StyledBigButton>
            <StyledBigButton>Email</StyledBigButton>
          </StyledFooter>
        </StyledBottom>
      </StyledPage>
      <Toaster></Toaster>
    </>
  );
};

export default ViewAllUsers;
