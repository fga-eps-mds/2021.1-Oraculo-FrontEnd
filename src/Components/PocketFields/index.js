import React from "react";

import { StyledBigDiv, StyledBigButton } from "./styles";

const PocketFields = ({ name, description, creator }) => (
  <StyledBigDiv>
    <StyledBigButton>{name}</StyledBigButton>
    <StyledBigButton>{description}</StyledBigButton>
    <StyledBigButton>{creator}</StyledBigButton>
  </StyledBigDiv>
);

export default PocketFields;
