import React from "react";
import { StyledWhiteButton } from "./styles";

const GenericWhiteButton = ({ title, onClick }) => (
  <>
    <StyledWhiteButton onClick={onClick}>{title}</StyledWhiteButton>
  </>
);

export default GenericWhiteButton;
