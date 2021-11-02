import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FieldsDepartment from "../../Components/FieldsDeparment";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import SearchBar from "../../Components/SearchBar";
import { getInfoUser } from "../../Services/Axios/profileService";
import { getAllProcess } from "../../Services/Axios/processService";
import {
  StyledBody,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledNoRecords,
} from "./styles";

const HomePage = () => {
  const [sectionsLoad, setSectionsLoad] = useState(true);
  const [section, setSection] = useState("");
  const [sectionFields, setSectionFields] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const user = await getInfoUser();
      setSection(user.sections[0].name);
      setSectionFields(await getAllProcess(toast));
    }
    fetchUserData();
  });

  useEffect(() => {
    async function fetchUserData() {
      const user = await getInfoUser(toast);
      const departmentRecords = await getAllProcess(
        toast,
        JSON.stringify(user.sections[0].id)
      );
      setSection(user.sections[0].name);

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
        <h1>Departamento: {section}</h1>
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

        <FieldsDepartment process={sectionFields} />
        {sectionsLoad ? (
          <StyledNoRecords>
            Não há registros cadastrados no seu departamento
          </StyledNoRecords>
        ) : null}
      </StyledBody>
    </>
  );
};

export default HomePage;
