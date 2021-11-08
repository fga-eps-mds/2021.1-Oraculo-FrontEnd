import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { createUser } from "../../Services/Axios/processService";
import {
  getDepartments,
  getSections,
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
  StyledCheckboxDiv,
} from "./styles";

const ViewProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [section, setSection] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const [noneDepartment, setNoneDepartment] = useState({});
  const [noneSection, setNoneSection] = useState({});

  async function handleClick() {
    const user = {
      name: name,
      email: email,
      departmentID: department,
      sectionID: section,
      level: isAdmin,
      password: password,
    };
    console.log("USER", user);

    // Register User to Profile
    registerUser(user, toast);

    //Register User to Process
    createUser(user, toast);
  }

  //Fetch, find and set the default section and departments
  async function fetchData() {
    const secList = await getSections();
    const depList = await getDepartments();
    const noneSectionItem = secList.find(
      (sectionItem) => sectionItem.name === "none"
    );
    setNoneSection(noneSectionItem);
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
                  <h1>{isAdmin ? "Departamento" : "Seção"}</h1>
                  <select
                    required
                    onChange={(event) =>
                      isAdmin
                        ? (setDepartment(parseInt(event.target.value)),
                          setSection(noneSection.id))
                        : (setSection(parseInt(event.target.value)),
                          setDepartment(noneDepartment.id))
                    }
                  >
                    {!isAdmin ? (
                      <>
                        <option value="">Selecione a seção</option>
                        <SectionsList type={"sections"} />
                      </>
                    ) : (
                      <>
                        <option value="">Selecione o departamento</option>
                        <SectionsList type={"departmens"} />
                      </>
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
