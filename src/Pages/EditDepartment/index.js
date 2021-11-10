import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiBuildings } from "react-icons/bi";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import {
  editDepartmentById,
  getDepartments,
  getDepartmentsTotalNumber,
} from "../../Services/Axios/profileService";

import {
  StyledBlueRectangle,
  StyledButtonsDiv,
  StyledBackButton,
  StyledRegisterButton,
  StyledForms,
  StyledViewProfile,
  StyledWhiteRectangle,
} from "../CreateDepartment/styles.js";
import { useParams } from "react-router";

const EditDepartment = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState("");

  async function setAll() {
    const allDepart = await getDepartments();

    for (const element of allDepart) {
      console.log(element);
      if (element.id == id) {
        setDepartment(element.name);
        break;
      }
    }
  }

  window.onload = function () {
    setAll();
  };

  async function handleClick(event) {
    return editDepartmentById(department, id, toast);
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
                  <h1>Editar Departamento</h1>
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
                Editar
              </StyledRegisterButton>
            </StyledButtonsDiv>
          </StyledWhiteRectangle>
        </StyledViewProfile>
      </div>
    </>
  );
};

export default EditDepartment;
