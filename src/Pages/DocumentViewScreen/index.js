import React, { useEffect, useState } from "react";
import { history } from "../../history";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import MainButton from "../../Components/MainButton";
import {
  StyledTitle,
  StyledBody,
  StyledOrganizeButtons,
  StyledBigButton,
} from "./styles";

import Process from "../../Components/Process";
import Pagination from "../../Components/Pagination/index";
import {
  getProcessTotalNumber,
  getProcessByPage,
} from "../../Services/Axios/processService";
import toast from "react-hot-toast";

const DocumentViewScreen = () => {
  const [process, setProcess] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [processPerPage] = useState(4);
  const [allProcesses, setAllProcesses] = useState(0);

  async function setAll() {
    const temp = await getProcessTotalNumber(toast);
    setAllProcesses(temp.count);
  }

  function handleProcess() {
    history.push("/criar-registro");
    window.location.reload();
  }

  useEffect(() => {
    const fetchProcess = async () => {
      console.log(currentPage);
      const temp = await getProcessByPage(currentPage * processPerPage, toast);
      console.log(temp);
      setProcess(temp);
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
        <StyledTitle>Registros</StyledTitle>
        <div>
          <MainButton title={"Novo Registro"} onClick={handleProcess} />
        </div>
        <StyledOrganizeButtons>
          <StyledBigButton>Nº do Registro</StyledBigButton>
          <StyledBigButton>Cidade</StyledBigButton>
          <StyledBigButton>UF</StyledBigButton>
          <StyledBigButton>Solicitante</StyledBigButton>
          <StyledBigButton>Inclusão</StyledBigButton>
          <StyledBigButton>Nº do SEI</StyledBigButton>
          <StyledBigButton>Tag</StyledBigButton>
          <StyledBigButton>...</StyledBigButton>
        </StyledOrganizeButtons>
        <Process process={process} />
        <Pagination
          processPerPage={processPerPage}
          totalProcess={allProcesses}
          paginate={paginate}
        />
      </StyledBody>
    </>
  );
};

export default DocumentViewScreen;
