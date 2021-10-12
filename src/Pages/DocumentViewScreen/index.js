import React, { useEffect, useState } from "react";
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
        <Process process={process} />
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
