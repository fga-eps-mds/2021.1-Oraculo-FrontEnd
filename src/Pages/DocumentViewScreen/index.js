import React, { useState } from "react";
import { history } from "../../history";
import Header from "../../Components/Header";
import MainButton from "../../Components/MainButton";
import FilterButton from "../../Components/FilterButton";
import {
  StyledTitle,
  StyledBody,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledSmallButton,
} from "./styles";

import Process from "../../Components/Process";
import Pagination from "../../Components/Pagination/index";
import {
  getAllProcess,
  getProcessByPage,
} from "../../Services/Axios/processService";
import toast from "react-hot-toast";

const DocumentViewScreen = () => {
  const [process, setProcess] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [processPerPage] = useState(4);
  const [allProcesses, setallProcesses] = useState([]);

  async function setAll() {
    const temp = await getAllProcess(toast);
    setallProcesses(temp);
  }

  function handleProcess() {
    history.push("/criar-processo");
    window.location.reload();
  }

  async function fetchProcess() {
    setLoading(true);
    const res = await getProcessByPage(currentPage * processPerPage, toast);
    setProcess(res);
    setLoading(false);
  }

  window.onload = function () {
    fetchProcess();
    setAll();
  };

  // Get current process
  const indexOfLastProcess = currentPage * processPerPage;
  const indexOfFirstProcess = indexOfLastProcess - processPerPage;
  const currentProcess = process.slice(indexOfFirstProcess, indexOfLastProcess);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />

      <StyledBody>
        <StyledTitle>Registros</StyledTitle>
        <div>
          <FilterButton />
          <MainButton title={"Novo Registro"} onClick={handleProcess} />
        </div>
        <StyledOrganizeButtons>
          <StyledBigButton>Nº do Registro</StyledBigButton>
          <StyledBigButton>Solicitante</StyledBigButton>
          <StyledBigButton>Inclusão</StyledBigButton>
          <StyledBigButton>Nº do SEI</StyledBigButton>
          <StyledSmallButton>Cidade</StyledSmallButton>
          <StyledSmallButton>UF</StyledSmallButton>
          <StyledSmallButton>Tag</StyledSmallButton>
          <StyledSmallButton>...</StyledSmallButton>
        </StyledOrganizeButtons>
        <Process process={currentProcess} loading={loading} />
        <Pagination
          processPerPage={processPerPage}
          totalProcess={allProcesses.length}
          paginate={paginate}
        />
      </StyledBody>
    </>
  );
};

export default DocumentViewScreen;
