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

  // Fetch all Departments
  const fetchDepartments = async () => {
    let secList = await getSections();
    //Remove default "none" Department
    secList = secList.filter((sec) => sec.name !== "none");
    setSections(secList);
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  // Function to send to create section
  function handleSections() {
    history.push("/criar-secao");
    window.location.reload();
  }

  // Adding search term
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <HeaderWithButtons />

      <StyledBody>
        {/* List Department title */}
        <StyledTitle>Seções - Todos</StyledTitle>
        {/* adding search bar */}
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
            <MainButton title={"Nova Seção"} onClick={handleSections} />
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
