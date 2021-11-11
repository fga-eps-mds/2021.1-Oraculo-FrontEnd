import React, { useEffect, useState } from "react";
import { history } from "../../history";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import MainButton from "../../Components/MainButton";
import RenderFilters from "../../Components/Filters";

import {
  StyledTitle,
  StyledBody,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledTop,
  ButtonDiv,
  StyledSearchBarSize
} from "./styles";

import Process from "../../Components/Process";
import Pagination from "../../Components/Pagination/index";
import {
  getProcessTotalNumber,
  getProcessByPage,
} from "../../Services/Axios/processService";
import toast from "react-hot-toast";

const AllRegistersScreen = () => {
  const [process, setProcess] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [processPerPage] = useState(30);
  const [allProcesses, setAllProcesses] = useState(0);
  // Acrescentando termo para busca
  const [ where, setWhere] = useState({});

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
      const temp = await getProcessByPage(currentPage, toast,{ where });
      console.log(temp);
      setProcess(temp);
    };
    fetchProcess();
  }, [currentPage, where]);

  window.onload = function () {
    setAll();
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <HeaderWithButtons />

      <StyledBody>
        <StyledTitle>Registros - Todos</StyledTitle>
        <StyledTop>
          <StyledSearchBarSize>
            {/* área para procurar registros */}
            <RenderFilters handleWhere={{where, setWhere}}/>
          </StyledSearchBarSize>
          <ButtonDiv>
            <MainButton onClick={handleProcess} title={"Novo Registro"} />
          </ButtonDiv>
        </StyledTop>
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
        {/* Procurar registros com base no termo procurado*/}
        {process ? (
          <Process process={process} />
        ) : (
          <h1 class="zero-registros">
            Não há registros cadastrados no sistema
          </h1>
        )}
        {/* Paginação dos registros*/}
        <Pagination
          processPerPage={processPerPage}
          totalProcess={allProcesses}
          paginate={paginate}
        />
      </StyledBody>
    </>
  );
};

export default AllRegistersScreen;
