import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const styles = {};

export const StyledBody = styled.div`
  display: -ms-flexbox;
  align-items: center;
  margin-inline: 2rem;
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

export const StyledTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  text-align: left;
  color: #000000;
`;

export const ButtonDiv = styled.div`
  width: 19.5rem;
  align-items: center;
`;

export const StyledTop = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    justify-content: safe;
    margin-top: 1rem;
  }
`;

export const StyledSearchBarSize = styled.div`
  margin: 0 !important;
  width: 30rem;
  @media only screen and (max-width: 1300px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const StyledSearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;

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
