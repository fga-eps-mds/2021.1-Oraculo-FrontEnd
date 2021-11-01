import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import SearchBar from "../../Components/SearchBar";
import { getAllDepartamentRecords } from "../../Services/Axios/processService";
import { getInfoUser } from "../../Services/Axios/profileService";
import {
  StyledBody,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledNoRecords,
} from "./styles";

const HomePage = () => {
  const [sectionsRecords, setSectionRecords] = useState([]);
  const [sectionsLoad, setSectionsLoad] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      const user = await getInfoUser(toast);
      const departmentRecords = await getAllDepartamentRecords(
        toast,
        JSON.stringify(user.sections[0].id)
      );

      if (departmentRecords !== undefined) {
        setSectionsLoad(false);
      }
    }
    fetchUserData();
  }, []);

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
        {sectionsLoad ? (
          <StyledNoRecords>
            Não há registros cadastrados no sistema
          </StyledNoRecords>
        ) : null}
      </StyledBody>
    </>
  );
};

export default HomePage;
