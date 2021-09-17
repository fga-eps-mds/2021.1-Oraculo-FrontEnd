import React from "react";
import { FaRegFileAlt, FaPlus } from "react-icons/fa";

import {
  StyledCreateButton,
  StyledCancelButton,
  StyledForms,
  StyledWhiteRectangle,
  StyledTitle,
  StyledBlueRectangle,
  StyledProcess,
  StyledButtonsDiv,
} from "./styles";

import MainButton from "../../Components/MainButton";
import Header from "../../Components/Header";

const CreateProcess = () => {
  return (
    <>
      <Header />
      <div>
        <StyledTitle>
          <p>Criar Processo</p>
          <div>
            <MainButton title={"Adicionar Campo"} />
          </div>
        </StyledTitle>

        <StyledProcess>
          <StyledBlueRectangle>
            <FaRegFileAlt size="20rem" color="white" />
          </StyledBlueRectangle>

          <StyledWhiteRectangle>
            <StyledForms>
              <form>
                <div>
                  <h1>Emissor</h1>
                  <input type="text" placeholder="Emissor" />
                </div>
                <div>
                  <h1>N° do SEI</h1>
                  <input type="text" placeholder="N° do SEI" />
                </div>
                <div>
                  <h1>Setor</h1>
                  <input type="text" placeholder="Setor" />
                </div>
                <div>
                  <h1>Data de Emissão</h1>
                  <input type="text" placeholder="Data de Emissão" />
                </div>
                <div>
                  <h1>Tags</h1>
                  <button>
                    <FaPlus />
                  </button>
                </div>
              </form>
            </StyledForms>
            <StyledButtonsDiv>
              <StyledCancelButton>Cancelar</StyledCancelButton>
              <StyledCreateButton>Criar</StyledCreateButton>
            </StyledButtonsDiv>
          </StyledWhiteRectangle>
        </StyledProcess>
      </div>
    </>
  );
};

export default CreateProcess;
