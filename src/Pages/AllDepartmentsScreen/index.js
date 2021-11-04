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

import Process from "../../Components/Process";
import Pagination from "../../Components/Pagination/index";
import {
  getProcessTotalNumber,
  getProcessByPage,
} from "../../Services/Axios/processService";
import toast from "react-hot-toast";

const AllDepartmentsScreen = () => {
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
        <StyledTitle>Seção - Todos</StyledTitle>
        <StyledAddButtons>
          <MainButton title={"Nova Seção"} onClick={handleProcess} />
          <MainButton title={"Novo Departamento"} onClick={handleProcess} />
        </StyledAddButtons>
        <StyledOrganizeButtons>
          <StyledBigButton>Nome</StyledBigButton>
          <StyledBigButton>Departamento</StyledBigButton>
          <StyledBigButton>...</StyledBigButton>
        </StyledOrganizeButtons>
        {process ? (
          <Process process={process} />
        ) : (
          <h1 class="zero-registros">
            Não há Seções cadastradas no sistema
          </h1>
        )}
        <Pagination
          processPerPage={processPerPage}
          totalProcess={allProcesses}
          paginate={paginate}
        />
      </StyledBody>
    </>
  );
};

export default AllDepartmentsScreen;
