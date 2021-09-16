import React from "react";

import { StyledTitle } from "./styles";
import { StyledBlueRectangle } from "./styles";
import { StyledPaperSheet } from "./styles";
import { StyledCut } from "./styles";

import MainButton from "../../Components/MainButton";
import Header from "../../Components/Header";

const CreateProcess = () => {
  return (
    <>
      <Header />
      <StyledTitle>Criar Processo</StyledTitle>
      <MainButton title={"Adicionar Campo"} />
      <StyledBlueRectangle>
        <StyledPaperSheet>
          <StyledCut />
        </StyledPaperSheet>
      </StyledBlueRectangle>
    </>
  );
};

export default CreateProcess;
