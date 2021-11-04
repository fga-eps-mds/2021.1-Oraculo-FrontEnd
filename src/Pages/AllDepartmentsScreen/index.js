import React, { useEffect, useState } from "react";
import { history } from "../../history";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import MainButton from "../../Components/MainButton";
import {
  StyledTitle,
  StyledBody,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledAddButtons,
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
    setAllDepartments(temp.count);
  }

  function handleDepartments() {
    history.push("/criar-departamento");
    window.location.reload();
  }

  function handleSections() {
    history.push("/criar-secao");
    window.location.reload();
  }

  useEffect(() => {
    const fetchDepartments = async () => {
      console.log(currentPage);
      const temp = await getDepartmentsByPage(currentPage * departmentsPerPage, toast);
      console.log(temp);
      setDepartments(temp);
    };
    fetchDepartments();
  }, [currentPage]);

  window.onload = function () {
    setAll();
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <HeaderWithButtons />

      <StyledBody>
        <StyledTitle>Seção - Todos</StyledTitle>
        <StyledAddButtons>
          <MainButton title={"Nova Seção"} onClick={handleSections} />
          <MainButton title={"Novo Departamento"} onClick={handleDepartments} />
        </StyledAddButtons>
        <StyledOrganizeButtons>
          <StyledBigButton>Nome</StyledBigButton>
          <StyledBigButton>Departamento</StyledBigButton>
          <StyledBigButton>...</StyledBigButton>
        </StyledOrganizeButtons>
        {departments ? (
          <Departments departments={departments} />
        ) : (
          <h1 class="zero-registros">
            Não há Seções cadastradas no sistema
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
