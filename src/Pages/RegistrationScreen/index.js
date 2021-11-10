import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import {
  StyledBlueRectangle,
  StyledButtonsDiv,
  StyledCancelButton,
  StyledCreateButton,
  StyledForms,
  StyledProcess,
  StyledTitle,
  StyledWhiteRectangle,
} from "./styles";

const RegistrationScreen = () => {
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerDepartment, setRegisterDepartment] = useState("");
  const [registerUserLevel, setUserLevel] = useState("");
  const [registerPassword, setPassword] = useState("");

  async function handleSubmit(event) {
    console.info(`evento: ${event}`);
  }

  return (
    <>
      <HeaderWithButtons />
      <div>
        <StyledTitle>
          <p>Registrar Usuário</p>
        </StyledTitle>

        <StyledProcess>
          <StyledBlueRectangle>
            <BiUserCircle size="20rem" color="white" />
          </StyledBlueRectangle>

          <StyledWhiteRectangle>
            <StyledForms>
              <form onSubmit={handleSubmit}>
                <div>
                  <h1>Nome:</h1>
                  <input
                    id="registerNameInput"
                    type="text"
                    placeholder="Nome"
                    onChange={(event) => setRegisterName(event.target.value)}
                    value={registerName}
                  />
                </div>
                <div>
                  <h1>Email:</h1>
                  <input
                    id="registerEmailInput"
                    type="text"
                    placeholder="Email"
                    onChange={(event) => setRegisterEmail(event.target.value)}
                    value={registerEmail}
                  />
                </div>
                <div>
                  <h1>Departamento:</h1>
                  <select
                    id="registerDepartmentInput"
                    type="text"
                    onChange={(event) =>
                      setRegisterDepartment(event.target.value)
                    }
                    value={registerDepartment}
                  >
                    <option value="GI">Gerência de identificação - GI</option>
                    <option value="UI">Unidade de inteligência - UI</option>
                    <option value="GA">Gerencia adjunta - GA</option>
                    <option value="DICRIM">Divisão criminal - DICRIM</option>
                    <option value="DITEC">Divisão de tecnologia - DITEC</option>
                    <option value="DIADM">
                      Divisão administrativa - DIADM
                    </option>
                    <option value="DICIV">Divisão civil - DICIV</option>
                  </select>
                </div>
                <div>
                  <h1>Nível de usuário:</h1>
                  <select
                    id="registerUserLevel"
                    type="text"
                    onChange={(event) => setUserLevel(event.target.value)}
                    value={registerUserLevel}
                  >
                    <option value="1">Administrador Máximo</option>
                    <option value="2">Administrador DICRIM</option>
                    <option value="3">Administrador DITEC</option>
                    <option value="4">Administrador DIADM</option>
                    <option value="5">Administrador DICIV</option>
                  </select>
                </div>
                <div>
                  <h1>Senha:</h1>
                  <input
                    id="registerPassword"
                    type="text"
                    placeholder="Senha"
                    onChange={(event) => setPassword(event.target.value)}
                    value={registerPassword}
                  />
                </div>
              </form>
            </StyledForms>
            <StyledButtonsDiv>
              <StyledCancelButton onClick={() => window.history.back()}>
                Cancelar
              </StyledCancelButton>
              <StyledCreateButton onClick={handleSubmit}>
                Criar
              </StyledCreateButton>
            </StyledButtonsDiv>
          </StyledWhiteRectangle>
        </StyledProcess>
        <Toaster />
      </div>
    </>
  );
};

export default RegistrationScreen;
