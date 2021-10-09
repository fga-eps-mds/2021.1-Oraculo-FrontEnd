import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const StyledWhiteButton = styled.button`
  width: 9.375rem;
  height: 2.5rem;
  font-style: normal;
  font-weight: bold;
  font-family: ${fonts.font};
  font-size: ${fonts.sizeXlg};
  border-radius: ${radius.sizeMd};
  background: ${colors.white};
  border: 2px solid ${colors.black};
  text-align: center;

  cursor: pointer;
`;
