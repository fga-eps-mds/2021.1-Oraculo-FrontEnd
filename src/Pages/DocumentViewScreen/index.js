import React, { useState } from "react";
import Header from "../../Components/Header";
import MainButton from "../../Components/MainButton";
import PocketDocument from "../../Components/PocketDocument";
import { AiOutlineFilter } from "react-icons/ai";
import {
  StyledTitle,
  StyledBody,
  StyledFilterButton,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledSmallButton,
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
          <StyledBigButton>Emissor</StyledBigButton>
          <StyledBigButton>N do SEI</StyledBigButton>
          <StyledBigButton>Divisão</StyledBigButton>
          <StyledBigButton>Data</StyledBigButton>
          <StyledBigButton>Tag</StyledBigButton>
          <StyledSmallButton>...</StyledSmallButton>
        </StyledOrganizeButtons>
        <PocketDocument
          name="Name"
          seiNumber="123456789"
          department="Criminal"
          documentDate="02/08/6516"
        ></PocketDocument>
      </StyledBody>
    </>
  );
};

export default DocumentViewScreen;
