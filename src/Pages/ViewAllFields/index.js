import React, { useState } from "react";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
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
  ButtonDiv,
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
      <HeaderWithButtons />
      <StyledPage>
        <StyledTitle>Campos</StyledTitle>
        <StyledTop>
          <StyledSearchBarSize>
            <SearchBar />
          </StyledSearchBarSize>
          <ButtonDiv>
            <MainButton title={"Novo Campo"} />
          </ButtonDiv>
        </StyledTop>
        <StyledBottom>
          <StyledOrganizeButtons>
            <StyledBigButton>Nome</StyledBigButton>
            <StyledBigButton>Descrição</StyledBigButton>
            <StyledBigButton>Criador</StyledBigButton>
          </StyledOrganizeButtons>

          <Fields process={register} />
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
