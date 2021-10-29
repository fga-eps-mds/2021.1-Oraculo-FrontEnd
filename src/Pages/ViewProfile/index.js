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
                        value={user.name != undefined ? user.name : "erro"}
                      />
                    </div>
                    <div>
                      <h1>Email</h1>
                      <input
                        id="email"
                        type="text"
                        placeholder="william@pcgo.org.br"
                        value={user.email != undefined ? user.email : "erro"}
                      />
                    </div>
                    <div>
                      <h1>Setor</h1>
                      <input
                        id="sectorNum"
                        type="text"
                        placeholder="Setor"
                        value={
                          user.sections[0] != undefined ? user.sections[0].name : "erro"
                        }
                      />
                    </div>
                  </form>
                </StyledForms>
                <StyledButtonsDiv>
                  <StyledBackButton onClick={() => window.history.back()}>
                    Voltar
                  </StyledBackButton>
                  <StyledEditButton
                    onClick={() => toast.error("Essa função estará disponível em breve")}>
                    Editar
                  </StyledEditButton>
                </StyledButtonsDiv>
              </StyledWhiteRectangle>
            </StyledViewProfile>
            <Toaster />
          </div>
        </>
      );
    }
  }
}

export default ViewProfile;
