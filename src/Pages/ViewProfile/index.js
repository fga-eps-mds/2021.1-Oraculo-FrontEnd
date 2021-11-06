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
  const [departmentID, setDepartmentID] = useState("");

  const [level, setLevel] = useState(userType.common);
  const [isAdmin, setAdmin] = useState(false);

  async function handleClick(event) {
    changeUser(toast, name, email, sectionID);
    const user = await getInfoUser(toast);
    setName(user.name);
    setEmail(user.email);
    setSectionID(user.sections[0].id);
    setDepartmentID(user.departments[0].id);
    setLevel(user.levels[0].id);
    console.log("User Updated", user);
  }

  useEffect(() => {
    async function fetchUserData() {
      const user = await getInfoUser(toast);
      setName(user.name);
      setEmail(user.email);
      setSectionID(parseInt(user.sections[0].id));
      setDepartmentID(parseInt(user.departments[0].id));
      setLevel(parseInt(user.levels[0].id));
      console.log("User Atual", user);
    }
    setAdmin(level === userType.admin ? true : false);
    fetchUserData();
  }, []);

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
                    placeholder="William Cops"
                    defaultValue={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div>
                  <h1>Email</h1>
                  <input
                    id="email"
                    type="text"
                    placeholder="william@pcgo.org.br"
                    defaultValue={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div>
                  <h1>{isAdmin ? "Departamento" : "Seção"}</h1>
                  <select
                    required
                    onChange={(event) => {
                      setSectionID(event.target.selectedIndex + 1);
                    }}
                  >
                    {isAdmin ? (
                      <SectionsList type="departmens" />
                    ) : (
                      <SectionsList type="sections" />
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
                onClick={(event) => {
                  handleClick(event);
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
