import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const Head = styled.div`
  height: 6.25rem;
  width: 100%;
  background-color: #1f3541;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderImage = styled.img`
  cursor: pointer;
  width: 180px;
  margin-left: 3rem;
`;

export const StyledOrganizeButtons = styled.div`
  margin-right: 3rem;
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

export const StyledCircleButton = styled.div`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 1px solid #ffffff;
  background: ${colors.white};
`;

export const StyledDropDown = styled.div`
  position: relative;
  display: inline-block;

  div {
    display: none;
    position: absolute;
    background-color: #1f3541;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    button {
      margin: 1rem 1rem;
    }
  }
  :hover {
    div {
      display: block;
    }
  }
`;
