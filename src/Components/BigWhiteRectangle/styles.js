import styled from "styled-components";
import { colors } from "../../style";

export const StyledWhiteRectangle = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 38rem;
  width: 48rem;

  border: none;
  border-radius: 0px 20px 20px 0px;
  box-shadow: 0px 4px 4px ${colors.black};
  background-color: ${colors.white};
`;
