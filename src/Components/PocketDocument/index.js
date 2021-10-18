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
    <button class="registerNumber">{registerNumber}</button>
    <button class="city">{city}</button>
    <button class="state">{state}</button>
    <button class="requester">{requester}</button>
    <button class="inclusionDate">{inclusionDate}</button>
    <button class="seiNumber">{seiNumber}</button>
    <button class="tag">Tag</button>
    <button class="extra">...</button>
  </StyledBigDiv>
);

export default PocketDocument;
