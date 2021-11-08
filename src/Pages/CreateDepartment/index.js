import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiBuildings } from "react-icons/bi";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { registerDepartment } from "../../Services/Axios/profileService";

import {
  StyledBlueRectangle,
  StyledButtonsDiv,
  StyledBackButton,
  StyledRegisterButton,
  StyledForms,
  StyledViewProfile,
  StyledWhiteRectangle,
} from "./styles";

const CreateDepartment = () => {
  const [department, setDepartment] = useState("");

  async function handleClick(event) {
    return registerDepartment(department, toast);
  }

  return (
    <>
      <HeaderWithButtons />
      <div>
        <Toaster />
        <StyledViewProfile>
          {/* Create Department image */}
          <StyledBlueRectangle>
            <BiBuildings size="20rem" color="white" />
          </StyledBlueRectangle>

          <StyledWhiteRectangle>
            <StyledForms>
              <form>
                <div>
                  <h1>Nome do departamento</h1>
                  <input
                    id="email"
                    type="text"
                    required
                    placeholder="Nome do departamento"
                    value={department}
                    onChange={(event) => setDepartment(event.target.value)}
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

export default CreateDepartment;
