import React from "react";
import styled from "styled-components";
import MainButton from "../../Components/MainButton";

const StyledTitle = styled.h1`
  position: absolute;
  width: 24.063rem;
  height: 2.625rem;
  left: 24rem;
  top: 9.625rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const CreateProcess = () => {
  return (
    <>
      <StyledTitle>Criar Processo</StyledTitle>
      <MainButton title={"Adicionar Campo"} />
    </>
  );
};

export default CreateProcess;
