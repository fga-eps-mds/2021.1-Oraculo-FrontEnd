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

import Departments from "../../Components/Departments";
import Pagination from "../../Components/Pagination/index";
import {
  getDepartmentsTotalNumber,
  getDepartmentsByPage,
} from "../../Services/Axios/profileService";
import toast from "react-hot-toast";

const AllDepartmentsScreen = () => {
  const [departments, setDepartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [departmentsPerPage] = useState(4);
  const [allDepartments, setAllDepartments] = useState(0);

  async function setAll() {
    const temp = await getDepartmentsTotalNumber(toast);
    setAllDepartments(temp?.count);
  }

  function handleDepartments() {
    history.push("/criar-departamento");
    window.location.reload();
  }

  const fetchDepartments = async () => {
    //Fetch department from API
    let depList = await getDepartmentsByPage(toast);
    // Filter to remove department none from the screen
    depList = depList.filter((dep) => dep.name !== "none");
    setDepartments(depList);
  };

  useEffect(() => {
    fetchDepartments();
  }, [currentPage]);

  window.onload = function () {
    setAll();
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Acrescentando termo para busca
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <HeaderWithButtons />

      <StyledBody>
        {/* Titulo para listagem de departamentos */}
        <StyledTitle>Departamentos - Todos</StyledTitle>
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
            <MainButton
              title={"Novo Departamento"}
              onClick={handleDepartments}
            />
          </StyledAddButtons>
        </div>
        <StyledOrganizeButtons>
          <StyledBigButton>Nome do departamento</StyledBigButton>
        </StyledOrganizeButtons>
        {departments ? (
          <Departments searchTerm={searchTerm} departments={departments} />
        ) : (
          <h1 class="zero-registros">
            Não há departamentos cadastrados no sistema
          </h1>
        )}
        <Pagination
          departmentsPerPage={departmentsPerPage}
          totalDepartments={allDepartments}
          paginate={paginate}
        />
      </StyledBody>
    </>
  );
};

export default AllDepartmentsScreen;
