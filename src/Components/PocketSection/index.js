import React from "react";
import { StyledBigDiv } from "./styles";

const PocketSection = ({ name }) => (
  // Show all sections per name
  <StyledBigDiv>
    <button class="registerNumber">{name}</button>
  </StyledBigDiv>
);

export default PocketSection;
