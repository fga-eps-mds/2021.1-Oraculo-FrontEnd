import React from "react";

import { StyledBigDiv } from "./styles";

const PocketDocument = ({
  registerNumber,
  city,
  state,
  requester,
  inclusionDate,
  seiNumber,
  registerId,
}) => (
  <StyledBigDiv>
    <a href={`/ver-registro/${registerId}`} class="registerNumber">
      {registerNumber}
    </a>
    <a href={`/ver-registro/${registerId}`} class="city">
      {city}
    </a>
    <a href={`/ver-registro/${registerId}`} class="state">
      {state}
    </a>
    <a href={`/ver-registro/${registerId}`} class="requester">
      {requester}
    </a>
    <a href={`/ver-registro/${registerId}`} class="inclusionDate">
      {inclusionDate}
    </a>
    <a href={`/ver-registro/${registerId}`} class="seiNumber">
      {seiNumber}
    </a>

    <button class="tag">Tag</button>
    <button class="extra">...</button>
  </StyledBigDiv>
);

export default PocketDocument;
