import React from "react";
import { StyledTitle } from "./styles";
import MainButton from "../../Components/MainButton";
import Header from "../../Components/Header";

const CreateProcess = () => {
  return (
    <>
      <Header />
      <StyledTitle>Criar Processo</StyledTitle>
      <MainButton title={"Adicionar Campo"} />
    </>
  );
};

export default CreateProcess;
