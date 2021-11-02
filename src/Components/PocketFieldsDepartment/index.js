import React from "react";

import { StyledBigDiv, StyledText } from "./style";

const PocketFields = ({
  register_number,
  city,
  state,
  requester,
  inclusion_date,
  sei_number,
}) => (
  <StyledBigDiv>
    <StyledText>{register_number}</StyledText>
    <StyledText>{city}</StyledText>
    <StyledText>{state}</StyledText>
    <StyledText>{requester}</StyledText>
    <StyledText>{inclusion_date}</StyledText>
    <StyledText>{sei_number}</StyledText>
  </StyledBigDiv>
);

export default PocketFields;
