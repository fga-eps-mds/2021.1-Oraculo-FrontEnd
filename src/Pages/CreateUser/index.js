import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { createUser } from "../../Services/Axios/processService";
import {
  getDepartments,
  registerUser,
} from "../../Services/Axios/profileService";
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
  const [department, setDepartment] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const [noneDepartment, setNoneDepartment] = useState({});

  async function handleClick() {
    const user = {
      name: name,
      email: email,
      departmentID: department,
      sectionID: {},
      level: isAdmin,
      password: password,
    };
    console.log("USER", user);

    // Register User to Profile
    registerUser(user, toast);

    //Register User to Process
    createUser(user, toast);
  }

  //Fetch, find and set the default departments
  async function fetchData() {
    const depList = await getDepartments();
    const noneDepartmentItem = depList.find(
      (departmentItem) => departmentItem.name === "none"
    );
    setNoneDepartment(noneDepartmentItem);
  }

  useEffect(() => {
    fetchData();
  }, [isAdmin]);

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
                  <h1>Administrador</h1>
                  <input
                    type="checkbox"
                    onChange={(event) => {
                      setAdmin(event.target.checked);
                    }}
                  />
                </div>
                <div>
                  <h1>Departamento</h1>
                  <select
                    required
                    onChange={(event) =>
                      setDepartment(parseInt(event.target.value))
                    }
                  >
                    <>
                      <option value="">Selecione o departamento</option>
                      <SectionsList type={"departmens"} />
                    </>
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
                onClick={(event) => handleClick()}
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
