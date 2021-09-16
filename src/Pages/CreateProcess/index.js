import React from "react";

import { StyledTitle } from "./styles";
import { StyledBlueRectangle } from "./styles";
import { StyledPaperSheet } from "./styles";
import { StyledCut } from "./styles";
import { StyledWhiteRectangle } from "./styles";
import { StyledForms } from "./styles";

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

      <StyledWhiteRectangle>
        <StyledForms>
          <form>
            <h1>Emissor</h1>
            <input type="text" placeholder="  Emissor" />
            <h1>N° do SEI</h1>
            <input type="text" placeholder="  N° do SEI" />
            <h1>Setor</h1>
            <input type="text" placeholder="  Setor" />
            <h1>Data de Emissão</h1>
            <input type="text" placeholder="  Data de Emissão" />
            <h1>Tags</h1>
            <input type="text" placeholder="  Tags" />
          </form>
        </StyledForms>
      </StyledWhiteRectangle>
    </>
  );
};

export default CreateProcess;
