import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const styles = {};

export const StyledBody = styled.div`
  margin-left: 46px;
  margin-right: 46px;

  h1 {
    margin-top: 40px;
    font-size: 22px;
  }

  div {
    margin-top: 2rem;
    display: flex;
  }

  .zero-registros {
    text-align: center;
    font-size: 3rem;
  }
`;

export const StyledOrganizeButtons = styled.div`
  justify-content: space-between;
  background: #1f3541;
  display: inline-block;
  border: 0px solid #5e5e5e;
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  height: 4rem;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
`;

export const StyledBigButton = styled.button`
  height: 3rem;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  color: #ffffff;
  font-style: normal;
  font-size: 28px;
  line-height: 20px;
  text-align: center;
  background: transparent;
  cursor: pointer;
  border: none;
`;

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
