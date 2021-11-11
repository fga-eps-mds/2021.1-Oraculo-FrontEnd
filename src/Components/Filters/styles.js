import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const styles = {};

export const StyledFilterDiv = styled.div`
  display: flex;
  flex-direction: column;

  .add-filter {
    width: 24rem;
    margin: 2rem 2rem 0 0;
    height: 3.38rem;
    cursor: pointer;
  }

  .add-filter,
  select,
  input,
  .x-button {
    font-style: normal;
    font-weight: bold;
    font-family: ${fonts.font};
    font-size: ${fonts.sizeXlg};
    background: ${colors.white};
    border-radius: ${radius.sizeSm};
    border: 2px solid ${colors.black};
    outline: none;
  }
`;

export const StyledSearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;

  select {
    width: 24rem;
    margin-right: 2rem;
    height: 3.38rem;
  }

  .search-icon {
    margin: 0.4rem 0 0 26rem;
    position: absolute;
    cursor: pointer;
    background: transparent;
    border: none;
  }
  input {
    width: 40rem;
    height: 3rem;
    padding-left: 4rem;
  }

  .x-button {
    width: 3.38rem;
    margin-left: 2rem;
    height: 3.38rem;
  }
`;
