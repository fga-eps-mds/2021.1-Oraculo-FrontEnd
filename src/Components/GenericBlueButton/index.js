import React from "react";
import { StyledBlueButton } from "./styles";

const GenericBlueButton = ({ title, onClick }) => (
  <>
    <StyledBlueButton onClick={onClick}>{title}</StyledBlueButton>
  </>
);

export default GenericBlueButton;
