import React, { useState } from "react";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import toast, { Toaster } from "react-hot-toast";
import { history } from "../../history";
import {
  StyledTitle,
  StyledBottom,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledSearchBarSize,
  StyledPage,
  StyledTop,
  StyledFooter,
} from "../ViewAllFields/styles";
import { getAllTags } from "../../Services/Axios/processService";
import PocketTags from "../../Components/PocketTags";
import { GrFormSearch } from "react-icons/gr";
import { StyledSearchBar } from "../HomePage/styles";

const ViewAllTags = () => {
  const [tags, setTags] = useState([]);
  /* Estado para termo de procura */
  const [searchTerm, setSearchTerm] = useState("");

  const receiveTags = async () => {
    setTags(await getAllTags(toast));
  };

  console.log("A"+tags);

  window.onload = function () {
    receiveTags();
  };

  return (
    <>
      <HeaderWithButtons />
      <StyledPage>
        <StyledTitle>Tags</StyledTitle>
        <StyledTop>
          <StyledSearchBarSize>
            {/* Fazer botão atualizar ver todos usuarios */}
            <StyledSearchBar>
              <button>
                <GrFormSearch size="3rem" />
              </button>
              <input
                id="searchText"
                type="text"
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </StyledSearchBar>
          </StyledSearchBarSize>
        </StyledTop>
        <StyledBottom>
          <StyledOrganizeButtons>
            <StyledBigButton style={{ width: "50%" }}>Nome</StyledBigButton>
            <StyledBigButton style={{ width: "50%" }}>Cor</StyledBigButton>
          </StyledOrganizeButtons>
          {tags ? (
            // Termo de pesquisa e lista de usuários para mapa
            <PocketTags searchTerm={searchTerm} tags={tags} />
          ) : (
            <StyledTitle>Não há tags cadastradas</StyledTitle>
          )}
          <StyledFooter>
            <StyledBigButton style={{ width: "50%" }}>Nome</StyledBigButton>
            <StyledBigButton style={{ width: "50%" }}>Cor</StyledBigButton>
          </StyledFooter>
        </StyledBottom>
      </StyledPage>
      <Toaster></Toaster>
    </>
  );
};

export default ViewAllTags;
