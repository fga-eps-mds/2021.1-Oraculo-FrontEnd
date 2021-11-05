import React, { useState } from "react";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import MainButton from "../../Components/MainButton";
import SearchBar from "../../Components/SearchBar";
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

const ViewAllUsers = () => {
  const [users, setUsers] = useState([]);

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
            <SearchBar />
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
          <PocketUser user={users} />
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
