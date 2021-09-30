import React from "react";
import { StyledRedButton } from "./styles";

const GenericRedButton = ({ title, onClick }) => (
  <>
    <StyledRedButton onClick={onClick}>{title}</StyledRedButton>
  </>
);

export default GenericRedButton;
