import React from "react";
import {
  StyledOrganizeButtons,
  StyledBigButton,
  StyledSmallButton,
  StyledBody,
} from "./styles";

const FieldsGroup = () => (
  <>
    <StyledBody>
      <StyledOrganizeButtons>
        <StyledBigButton>Emissor</StyledBigButton>
        <StyledBigButton>N do SEI</StyledBigButton>
        <StyledBigButton>Divisão</StyledBigButton>
        <StyledBigButton>Data</StyledBigButton>
        <StyledBigButton>Tag</StyledBigButton>
        <StyledSmallButton>...</StyledSmallButton>
      </StyledOrganizeButtons>
    </StyledBody>
  </>
);

export default FieldsGroup;
