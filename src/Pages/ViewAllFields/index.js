import React, { useState } from "react";
import Header from "../../Components/Header";
import MainButton from "../../Components/MainButton";
import SearchBar from "../../Components/SearchBar";
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
} from "./styles";
import { getAllFields } from "../../Services/Axios/processService";

const ViewAllFields = () => {
  const [register, setRegister] = useState([]);

  const fetchProcess = async () => {
    setRegister(await getAllFields(toast));
  };

  window.onload = function () {
    fetchProcess();
  };

  return (
    <>
      <Header />
      <StyledPage>
        <StyledTitle>Campos</StyledTitle>
        <StyledTop>
          <StyledSearchBarSize>
            <SearchBar />
          </StyledSearchBarSize>
          <MainButton title={"Novo Campo"} />
        </StyledTop>
        <StyledBottom>
          <StyledOrganizeButtons>
            <StyledBigButton>Nome</StyledBigButton>
            <StyledBigButton>Descrição</StyledBigButton>
            <StyledBigButton>Criador</StyledBigButton>
          </StyledOrganizeButtons>

          <Fields process={register} />
          <StyledFooter></StyledFooter>
        </StyledBottom>
      </StyledPage>
      <Toaster></Toaster>
    </>
  );
};

export default ViewAllFields;
