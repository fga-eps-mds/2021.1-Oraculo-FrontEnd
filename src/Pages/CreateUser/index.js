import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { createUser } from "../../Services/Axios/processService";
import { registerUser } from "../../Services/Axios/profileService";
import { SectionsList } from "./sections";

import {
  StyledBlueRectangle,
  StyledButtonsDiv,
  StyledBackButton,
  StyledRegisterButton,
  StyledForms,
  StyledViewProfile,
  StyledWhiteRectangle,
} from "./styles";

const ViewProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState(8);
  const [section, setSection] = useState(34);
  const [isAdmin, setAdmin] = useState(false);

  async function handleClick(event) {
    const user = {
      name: name,
      email: email,
      departmentID: department,
      sectionID: section,
      level: isAdmin,
      password: password,
    };
    console.log("USER", user);
    registerUser(user, toast);
    createUser(user, toast);
  }

  return (
    <>
      <HeaderWithButtons />
      <div>
        <Toaster />
        <StyledViewProfile>
          <StyledBlueRectangle>
            <BiUserCircle size="20rem" color="white" />
          </StyledBlueRectangle>

          <StyledWhiteRectangle>
            <StyledForms>
              <form>
                <div>
                  <h1>Nome</h1>
                  <input
                    id="name"
                    type="text"
                    placeholder="William Cops"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div>
                  <h1>Email</h1>
                  <input
                    id="email"
                    type="text"
                    placeholder="william@pcgo.org.br"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div>
                  <h1>Usuário Admin?</h1>
                  <input
                    type="checkbox"
                    onChange={(event) => {
                      setAdmin(event.target.checked);
                    }}
                  />
                </div>
                <div>
                  <h1>{isAdmin ? "Departamento" : "Seção"}</h1>
                  <select
                    required
                    placeholder="Selecione o departamento"
                    onChange={(event) =>
                      isAdmin
                        ? (setDepartment(parseInt(event.target.value)),
                          console.log("Admin"))
                        : (setSection(parseInt(event.target.value)),
                          console.log("Não é admin"))
                    }
                  >
                    {!isAdmin ? (
                      <SectionsList type={"sections"} />
                    ) : (
                      <SectionsList type={"departmens"} />
                    )}
                  </select>
                </div>
                <div>
                  <h1>Senha</h1>
                  <input
                    id="password"
                    type="password"
                    placeholder="Senha"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                  />
                </div>
              </form>
            </StyledForms>
            <StyledButtonsDiv>
              <StyledBackButton
                type="button"
                onClick={() => window.history.back()}
              >
                Voltar
              </StyledBackButton>
              <StyledRegisterButton
                type="button"
                onClick={(event) => handleClick(event)}
              >
                Cadastrar
              </StyledRegisterButton>
            </StyledButtonsDiv>
          </StyledWhiteRectangle>
        </StyledViewProfile>
      </div>
    </>
  );
};

export default ViewProfile;
