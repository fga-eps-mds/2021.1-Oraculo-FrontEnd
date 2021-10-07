import React from "react";

import { StyledBigDiv, StyledBigButton, StyledSmallButton } from "./styles";

const PocketDocument = ({ requester, seiNumber, department, documentDate }) => (
  <StyledBigDiv>
    <StyledBigButton>{requester}</StyledBigButton>
    <StyledBigButton>{seiNumber}</StyledBigButton>
    <StyledBigButton>{department}</StyledBigButton>
    <StyledBigButton>{documentDate}</StyledBigButton>
    <StyledBigButton>Tag</StyledBigButton>
    <StyledSmallButton>...</StyledSmallButton>
  </StyledBigDiv>
);

export default PocketDocument;
