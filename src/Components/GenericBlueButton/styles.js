import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const StyledBlueButton = styled.button`
  width: 9.375rem;
  height: 2.5rem;
  color: ${colors.white};
  font-style: normal;
  font-weight: bold;
  font-family: ${fonts.font};
  font-size: ${fonts.sizeXlg};
  border-radius: ${radius.sizeMd};
  background: ${colors.blue};
  border: none;
  text-align: center;

  cursor: pointer;
`;
