import React, { useState } from "react";
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
import { recieveAllProcess } from "../../Services/Axios/processService";
import toast from "react-hot-toast";

const DocumentViewScreen = () => {
  const [process, setProcess] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [processPerPage] = useState(4);

  async function fetchProcess() {
    setLoading(true);
    const res = await recieveAllProcess(toast);
    setProcess(res);
    setLoading(false);
  }

  window.onload = function () {
    fetchProcess();
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
          <MainButton title={"Novo Documento"} />
        </div>
        <StyledOrganizeButtons>
          <StyledBigButton>Solicitante</StyledBigButton>
          <StyledBigButton>N do SEI</StyledBigButton>
          <StyledBigButton>Divisão</StyledBigButton>
          <StyledBigButton>Data</StyledBigButton>
          <StyledBigButton>Tag</StyledBigButton>
          <StyledSmallButton>...</StyledSmallButton>
        </StyledOrganizeButtons>
        <Process process={currentProcess} loading={loading} />
        <Pagination
          processPerPage={processPerPage}
          totalProcess={process.length}
          paginate={paginate}
        />
      </StyledBody>
    </>
  );
};

export default DocumentViewScreen;
