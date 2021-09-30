import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const StyledFilterButton = styled.button`
  width: 10rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.font};
  font-style: normal;
  font-size: ${fonts.sizeXXlg};
  line-height: 20px;
  text-align: center;
  border-radius: ${radius.sizeMd};
  background: ${colors.white};
  border: 2px solid ${colors.black};
  cursor: pointer;
`;
