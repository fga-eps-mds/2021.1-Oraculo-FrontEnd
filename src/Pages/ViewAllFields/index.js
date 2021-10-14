import Header from "../../Components/Header";
import MainButton from "../../Components/MainButton";
import SearchBar from "../../Components/SearchBar";
import {
  StyledTitle,
  StyledBody,
  StyledOrganizeButtons,
  StyledBigButton,
} from "./styles";

const ViewAllFields = () => {
  return (
    <>
      <Header />

      <StyledBody>
        <StyledTitle>Campos</StyledTitle>
        <div>
          <SearchBar />
          <div>
            <MainButton title={"Novo Registro"} />
          </div>
        </div>
        <StyledOrganizeButtons>
          <StyledBigButton>Nome</StyledBigButton>
          <StyledBigButton>Descrição</StyledBigButton>
          <StyledBigButton>Criador</StyledBigButton>
        </StyledOrganizeButtons>
      </StyledBody>
    </>
  );
};

export default ViewAllFields;
