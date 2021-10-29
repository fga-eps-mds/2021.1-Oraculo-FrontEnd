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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sectionID, setSectionID] = useState("");

  async function handleClick(event) {
    changeUser(toast, name, email, sectionID);
    const user = await getInfoUser(toast);
    setName(user.name);
    setEmail(user.email);
  }

  useEffect(() => {
    async function fetchUserData() {
      const user = await getInfoUser(toast);
      setName(user.name);
      setEmail(user.email);
    }
    fetchUserData();
  });

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
                  <h1>Departamento</h1>
                  <select
                    required
                    placeholder="Selecione o departamento"
                    onChange={(event) => {
                      setSectionID(event.target.selectedIndex + 1);
                    }}
                  >
                    <SectionsList />
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
