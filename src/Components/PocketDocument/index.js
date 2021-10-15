import React from "react";

import { StyledBigDiv, StyledBigButton, StyledSmallButton } from "./styles";

const PocketDocument = ({
  registerNumber,
  city,
  state,
  requester,
  inclusionDate,
  seiNumber,
}) => (
  <StyledBigDiv>
    <StyledBigButton>{registerNumber}</StyledBigButton>
    <StyledBigButton>{requester}</StyledBigButton>
    <StyledBigButton>{inclusionDate}</StyledBigButton>
    <StyledBigButton>{seiNumber}</StyledBigButton>
    <StyledSmallButton>{city}</StyledSmallButton>
    <StyledSmallButton>{state}</StyledSmallButton>
    <StyledSmallButton>Tag</StyledSmallButton>
    <StyledSmallButton>...</StyledSmallButton>
  </StyledBigDiv>
);

export default PocketDocument;
