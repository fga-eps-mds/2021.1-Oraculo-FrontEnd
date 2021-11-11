import React, { useState } from "react";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import Fields from "../../Components/Fields";
import toast, { Toaster } from "react-hot-toast";
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
import { getAllFields } from "../../Services/Axios/processService";
import { GrFormSearch } from "react-icons/gr";
import { StyledSearchBar } from "../HomePage/styles";

const ViewAllFields = () => {
  const [register, setRegister] = useState([]);
  /* Estadi para termo de procura */
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProcess = async () => {
    setRegister(await getAllFields(toast));
  };

  window.onload = function () {
    fetchProcess();
  };

  return (
    <>
      <HeaderWithButtons />
      <StyledPage>
        <StyledTitle>Campos</StyledTitle>
        <StyledTop>
          <StyledSearchBarSize>
            {/* Fazer botão atualizar com registros */}
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
          <ButtonDiv></ButtonDiv>
        </StyledTop>
        <StyledBottom>
          <StyledOrganizeButtons>
            <StyledBigButton>Nome</StyledBigButton>
            <StyledBigButton>Descrição</StyledBigButton>
            <StyledBigButton>Criador</StyledBigButton>
          </StyledOrganizeButtons>
          {/* Adicionar termo no map de campos */}
          <Fields searchTerm={searchTerm} process={register} />
          <StyledFooter>
            <StyledBigButton>Nome</StyledBigButton>
            <StyledBigButton>Descrição</StyledBigButton>
            <StyledBigButton>Criador</StyledBigButton>
          </StyledFooter>
        </StyledBottom>
      </StyledPage>
      <Toaster></Toaster>
    </>
  );
};

export default ViewAllFields;
