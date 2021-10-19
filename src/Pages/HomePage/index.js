import React, { useEffect, useState } from "react";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import SearchBar from "../../Components/SearchBar";
import { StyledBody, StyledOrganizeButtons, StyledBigButton } from "./styles";

import Process from "../../Components/Process";
import Pagination from "../../Components/Pagination/index";
import {
  getProcessTotalNumber,
  getProcessByPage,
} from "../../Services/Axios/processService";
import toast from "react-hot-toast";

const HomePage = () => {
  const [process, setProcess] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [processPerPage] = useState(4);
  const [allProcesses, setAllProcesses] = useState([]);

  async function setAll() {
    const temp = await getProcessTotalNumber(toast);
    setAllProcesses(temp.count);
    console.log(allProcesses);
  }

  useEffect(() => {
    const fetchProcess = async () => {
      console.log(currentPage);
      setProcess(await getProcessByPage(currentPage * processPerPage, toast));
    };
    fetchProcess();
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
        <h1>Pesquisar Registro</h1>
        <SearchBar></SearchBar>
        <h1>Departamento: Não Implementado</h1>
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
        {/* <Process process={process} />
        <Pagination
          processPerPage={processPerPage}
          totalProcess={allProcesses}
          paginate={paginate}
        /> */}
      </StyledBody>
    </>
  );
};

export default HomePage;
