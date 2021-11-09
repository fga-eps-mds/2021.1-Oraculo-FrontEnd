import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { getInfoUser, changeUser } from "../../Services/Axios/profileService";
import { SectionsList } from "../CreateUser/sections";
import {
  StyledBlueRectangle,
  StyledButtonsDiv,
  StyledBackButton,
  StyledEditButton,
  StyledForms,
  StyledViewProfile,
  StyledWhiteRectangle,
} from "./styles";

const ViewProfile = () => {
  // User Type according to database
  const userType = {
    admin: 1,
    common: 2,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sectionID, setSectionID] = useState("");
  const [sectionName, setSectionName] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [departmentID, setDepartmentID] = useState("");

  const [level, setLevel] = useState(userType.common);
  const [isAdmin, setAdmin] = useState("");

  async function updateUser() {
    if (isAdmin) {
      changeUser(toast, name, email, 0, departmentID);
    } else {
      changeUser(toast, name, email, sectionID, 0);
    }
    const user = await getInfoUser(toast);
    console.log("Usuário atualizado", user);
    setName(user.name);
    setEmail(user.email);
    setSectionID(user.sections[0].id);
    setDepartmentID(user.departments[user.departments.length - 1].id);
    setLevel(user.levels[0].id);
  }

  useEffect(() => {
    async function fetchUserData() {
      const user = await getInfoUser(toast);
      setName(user.name);
      setEmail(user.email);
      setSectionID(parseInt(user.sections[0].id));
      setSectionName(user.sections[0].name);
      setDepartmentID(parseInt(user.departments[0].id));
      setDepartmentName(user.departments[0].name);
      setLevel(parseInt(user.levels[0].id));
      setAdmin(level === userType.admin ? true : false);
      console.log("Dados do Usuário", user);
    }
    fetchUserData();
  }, [isAdmin]);

  return (
    <>
      <HeaderWithButtons />
      <div>
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
                    placeholder={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div>
                  <h1>Email</h1>
                  <input
                    id="email"
                    type="text"
                    placeholder={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <h1>{isAdmin ? "Departamento" : "Seção"}</h1>
                  <select
                    required
                    onChange={(event) =>
                      isAdmin
                        ? (setDepartmentID(parseInt(event.target.value)),
                          console.log(
                            "Departamento Selecionado:",
                            event.target.value
                          ))
                        : (setSectionID(parseInt(event.target.value)),
                          console.log("Seção Selecionada:", event.target.value))
                    }
                  >
                    {isAdmin ? (
                      <>
                        <option selected>Dep. Atual - {departmentName}</option>
                        <SectionsList type={"departmens"} />
                      </>
                    ) : (
                      <>
                        <option selected>Seção Atual - {sectionName}</option>
                        <SectionsList type={"sections"} />
                      </>
                    )}
                  </select>
                </div>
              </form>
            </StyledForms>
            <StyledButtonsDiv>
              <StyledBackButton onClick={() => window.history.back()}>
                Voltar
              </StyledBackButton>
              <StyledEditButton
                onClick={() => {
                  updateUser();
                }}
                type="submit"
              >
                Editar
              </StyledEditButton>
            </StyledButtonsDiv>
          </StyledWhiteRectangle>
        </StyledViewProfile>
        <Toaster />
      </div>
    </>
  );
};

export default ViewProfile;
