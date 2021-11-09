import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { getInfoUser } from "../../Services/Axios/profileService";
import { StyledBody, StyledOrganizeButtons, StyledBigButton } from "./styles";
import Process from "../../Components/Process";
import Pagination from "../../Components/Pagination/index";
import {
  getProcessTotalNumber,
  getProcessByPage,
} from "../../Services/Axios/processService";
import { StyledSearchBar } from "../../Components/SearchBar/styles";
import { GrFormSearch } from "react-icons/gr";

const HomePage = () => {
  // Setar estados de processos e paginação

  const [process, setProcess] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [processPerPage] = useState(30);
  const [allProcesses, setAllProcesses] = useState(0);
  const [department, setDepartment] = useState("");
  const [admin, setAdmin] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  async function setAll() {
    const temp = await getProcessTotalNumber(toast);
    setAllProcesses(temp.count);
  }

  const userType = {
    admin: 1,
    common: 2,
  };

  const fetchProcess = async () => {
    // Fetch user info
    const user = await getInfoUser(toast);
    //Check if user is admin
    setAdmin(userType.admin === user.levels[0].id);
    //Set the name of user's department
    setDepartment(user.departments[0].name);

    const temp = await getProcessByPage(currentPage * processPerPage, toast);
    setProcess(temp);
  };

  useEffect(() => {
    fetchProcess();
  }, [currentPage, admin]);

  window.onload = function () {
    setAll();
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <HeaderWithButtons />
      <StyledBody>
        <h1>Pesquisar Registro</h1>
        {/* Fazer botão atualizar com registros */}
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
        <h1>Departamento: {department}</h1>
        <StyledOrganizeButtons>
          <StyledBigButton>Nº de Registro</StyledBigButton>
          <StyledBigButton>Cidade</StyledBigButton>
          <StyledBigButton>UF</StyledBigButton>
          <StyledBigButton>Solicitante</StyledBigButton>
          <StyledBigButton>Inclusão</StyledBigButton>
          <StyledBigButton>Nº do SEI</StyledBigButton>
          <StyledBigButton>Tags</StyledBigButton>
          <StyledBigButton>...</StyledBigButton>
        </StyledOrganizeButtons>
        {/* fazer registro atualizar com SearchTerm */}
        {process.length > 0 ? (
          <Process searchTerm={searchTerm} process={process} />
        ) : (
          <h1 class="zero-registros">Não há registros cadastrados no sistema</h1>
        )}
        {/* paginar registros */}
        <Pagination
          processPerPage={processPerPage}
          totalProcess={allProcesses}
          paginate={paginate}
        />
      </StyledBody>
    </>
  );
};

export default HomePage;
