import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import Header from "../../Components/Header";
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
      <Header />
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
                  <input
                    id="registerDepartmentInput"
                    type="text"
                    placeholder="Departamento"
                    onChange={(event) =>
                      setRegisterDepartment(event.target.value)
                    }
                    value={registerDepartment}
                  />
                </div>
                <div>
                  <h1>Nível de usuário:</h1>
                  <input
                    id="registerUserLevel"
                    type="text"
                    placeholder="Nível de administrador"
                    onChange={(event) => setUserLevel(event.target.value)}
                    value={registerUserLevel}
                  />
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
