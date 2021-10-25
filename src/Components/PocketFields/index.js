import React from "react";

import { StyledBigDiv, StyledText } from "./styles";

const PocketFields = ({ name, description, creator }) => (
  <StyledBigDiv>
    <StyledText>{name}</StyledText>
    <StyledText>{description}</StyledText>
    <StyledText>{creator}</StyledText>
  </StyledBigDiv>
);

export default PocketFields;
