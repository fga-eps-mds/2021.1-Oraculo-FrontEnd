import React from "react";
import { StyledFilterButton } from "./styles";
import { AiOutlineFilter } from "react-icons/ai";

const FilterButton = ({ onClick }) => (
  <>
    <StyledFilterButton onClick={onClick}>
      <AiOutlineFilter size="2.8rem" />
      Filtros
    </StyledFilterButton>
  </>
);

export default FilterButton;
