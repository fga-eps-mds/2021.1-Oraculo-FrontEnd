import React from "react";

import { StyledBigDiv } from "./styles";

const PocketDepartment = ({ name }) => (
  <StyledBigDiv>
    <button class="registerNumber">{name}</button>
  </StyledBigDiv>
);

export default PocketDepartment;
