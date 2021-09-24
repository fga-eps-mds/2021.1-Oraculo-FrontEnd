import React from "react";

import { StyledBigDiv, StyledBigButton, StyledSmallButton } from "./styles";

const PocketDocument = ({ name, seiNumber, department, documentDate }) => (
  <StyledBigDiv>
    <StyledBigButton>{name}</StyledBigButton>
    <StyledBigButton>{seiNumber}</StyledBigButton>
    <StyledBigButton>{department}</StyledBigButton>
    <StyledBigButton>{documentDate}</StyledBigButton>
    <StyledBigButton>Tag</StyledBigButton>
    <StyledSmallButton>...</StyledSmallButton>
  </StyledBigDiv>
);

export default PocketDocument;
