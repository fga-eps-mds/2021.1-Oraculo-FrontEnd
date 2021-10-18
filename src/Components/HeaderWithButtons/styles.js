import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const Head = styled.div`
  height: 6.25rem;
  width: 100%;
  background-color: #1f3541;
  display: flex;
  align-items: center;
`;

export const StyledHeaderImage = styled.img`
  width: 180px;
  margin-left: 3rem;
`;

export const StyledOrganizeButtons = styled.div`
  button {
    color: ${colors.white};
    font-style: normal;
    font-weight: bold;
    font-family: ${fonts.font};
    font-size: ${fonts.sizeXlg};
    border-radius: ${radius.sizeMd};
    background: transparent;
    border: none;
    text-align: center;

    cursor: pointer;
    margin: 0 0 0 40px;
  }
`;

export const StyledCircleButton = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px #ffffff;
`;
