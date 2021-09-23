import React, { useState } from "react";
import Header from "../../Components/Header";
import MainButton from "../../Components/MainButton";
import { AiOutlineFilter } from "react-icons/ai";
import {
  StyledTitle,
  StyledBody,
  StyledFilterButton,
  StyledOrganizeButtons,
} from "./styles";

const DocumentViewScreen = () => {
  return (
    <>
      <Header />

      <StyledBody>
        <StyledTitle>Processos</StyledTitle>
        <div>
          <StyledFilterButton>
            <AiOutlineFilter size="2.8rem" />
            Filtros
          </StyledFilterButton>
          <MainButton title={"Novo Documento"} />
        </div>
        <StyledOrganizeButtons>
          <button>Emissor</button>
          <button>N do SEI</button>
          <button>Divisão</button>
          <button>Data</button>
          <button>Tag</button>
          <button>...</button>
        </StyledOrganizeButtons>
      </StyledBody>
    </>
  );
};

export default DocumentViewScreen;
