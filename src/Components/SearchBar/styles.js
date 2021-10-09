import styled from "styled-components";
import { colors, radius, fonts } from "../../style";

export const StyledSearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  button {
    margin: 0.4rem 0 0 0.2rem;
    position: absolute;
    cursor: pointer;
    background: transparent;
    border: none;
  }
  input {
    width: 60rem;
    height: 3rem;
    background: ${colors.white};
    padding-left: 4rem;
    border-radius: ${radius.sizeSm};
    border: 2px solid ${colors.black};
    outline: none;

    font-style: normal;
    font-weight: bold;
    font-family: ${fonts.font};
    font-size: ${fonts.sizeXlg};
  }
`;
