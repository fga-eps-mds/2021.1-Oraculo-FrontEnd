import React, { useEffect, useState } from "react";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import SearchBar from "../../Components/SearchBar";
import { getInfoUser } from "../../Services/Axios/profileService";
import { StyledBody, StyledOrganizeButtons, StyledBigButton } from "./styles";

const HomePage = () => {
  const [section, setSection] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      const user = await getInfoUser();
      console.log("User Data", user);
      setSection(user.sections[0].name);
      return user;
    }

    console.log("Departamento:", section);
    fetchUserData();
  });

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
      </StyledBody>
    </>
  );
};

export default HomePage;
