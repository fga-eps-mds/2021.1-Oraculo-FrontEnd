import React, { useEffect, useState } from "react";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import SearchBar from "../../Components/SearchBar";
import {
  StyledBody,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledFirstSpace,
} from "./styles";
import { getProcessTotalNumber } from "../../Services/Axios/processService";
import toast from "react-hot-toast";

const HomePage = () => {
  return (
    <>
      <HeaderWithButtons />
      <StyledBody>
        <h1>Pesquisar Registro</h1>
        <SearchBar></SearchBar>
        <h1>Departamento: Não Implementado</h1>
        <StyledOrganizeButtons>
          <StyledFirstSpace></StyledFirstSpace>
          <StyledBigButton>Nº de Registro</StyledBigButton>
          <StyledBigButton>Cidade</StyledBigButton>
          <StyledBigButton>UF</StyledBigButton>
          <StyledBigButton>Solicitante</StyledBigButton>
          <StyledBigButton>Inclusão</StyledBigButton>
          <StyledBigButton>Nº do SEI</StyledBigButton>
          <StyledBigButton>Tags</StyledBigButton>
          <StyledBigButton>...</StyledBigButton>
        </StyledOrganizeButtons>
      </StyledBody>
    </>
  );
};

export default HomePage;
