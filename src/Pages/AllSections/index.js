import React, { useEffect, useState } from "react";
import { history } from "../../history";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import MainButton from "../../Components/MainButton";
import { GrFormSearch } from "react-icons/gr";
import {
  StyledTitle,
  StyledBody,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledAddButtons,
  StyledSearchBar,
} from "./styles";

import { getSections } from "../../Services/Axios/profileService";
import Sections from "../../Components/Sections";

const AllSections = () => {
  const [sections, setSections] = useState([]);
  function handleDepartments() {
    history.push("/criar-departamento");
    window.location.reload();
  }

  useEffect(() => {
    const fetchDepartments = async () => {
      const temp = await getSections();
      setSections(temp);
    };
    fetchDepartments();
  }, []);

  // Acrescentando termo para busca
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <HeaderWithButtons />

      <StyledBody>
        {/* Titulo para listagem de departamentos */}
        <StyledTitle>Seções - Todos</StyledTitle>
        {/* Adicionando barra de pesquisa */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <StyledSearchBar>
            <button>
              <GrFormSearch size="3rem" />
            </button>
            <input
              id="searchText"
              type="text"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </StyledSearchBar>
          <StyledAddButtons>
            <MainButton title={"Nova Seção"} onClick={handleDepartments} />
          </StyledAddButtons>
        </div>
        <StyledOrganizeButtons>
          <StyledBigButton>Nome da seção</StyledBigButton>
        </StyledOrganizeButtons>
        {sections ? (
          <Sections searchTerm={searchTerm} sections={sections} />
        ) : (
          <h1 class="zero-registros">Não há seções cadastradas no sistema</h1>
        )}
      </StyledBody>
    </>
  );
};

export default AllSections;
