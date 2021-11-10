import React from "react";

import { StyledBigDiv } from "./styles";

const PocketDepartment = ({ name, id }) => (
  <StyledBigDiv>
    <button
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `/editar-departamento/${id}`;
      }}
      class="registerNumber"
    >
      {name}
    </button>
  </StyledBigDiv>
);

export default PocketDepartment;
