import Header from "../../Components/Header";
import MainButton from "../../Components/MainButton";
import SearchBar from "../../Components/SearchBar";
import {
  StyledTitle,
  StyledBottom,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledSearchBarSize,
  StyledTop,
  StyledPage,
} from "./styles";

const ViewAllFields = () => {
  return (
    <>
      <Header />
      <StyledPage>
        <StyledTitle>Campos</StyledTitle>
        <StyledTop>
          <StyledSearchBarSize>
            <SearchBar />
          </StyledSearchBarSize>
          <MainButton title={"Novo Campo"} />
        </StyledTop>
        <StyledBottom>
          <StyledOrganizeButtons>
            <StyledBigButton>Nome</StyledBigButton>
            <StyledBigButton>Descrição</StyledBigButton>
            <StyledBigButton>Criador</StyledBigButton>
          </StyledOrganizeButtons>
        </StyledBottom>
      </StyledPage>
    </>
  );
};

export default ViewAllFields;
