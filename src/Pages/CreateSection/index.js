import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { registerSection } from "../../Services/Axios/profileService";

import {
  StyledBlueRectangle,
  StyledButtonsDiv,
  StyledBackButton,
  StyledRegisterButton,
  StyledForms,
  StyledViewProfile,
  StyledWhiteRectangle,
} from "./styles";

const CreateSection = () => {
  const [section, setSection] = useState("");

  async function handleClick(event) {
    return registerSection(section, toast);
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
                  <h1>Nome da seção</h1>
                  <input
                    id="email"
                    type="text"
                    required
                    placeholder="´Nome da seção"
                    value={section}
                    onChange={(event) => setSection(event.target.value)}
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

export default CreateSection;
