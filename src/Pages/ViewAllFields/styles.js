import styled from "styled-components";
import { colors } from "../../style";

export const styles = {};

export const StyledPage = styled.div`
  display: -ms-flexbox;
  align-items: center;
  margin-inline: 15rem;
`;

export const StyledTitle = styled.h1`
  margin-top: 4rem;
  margin-bottom: 3rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  text-align: left;
  color: #000000;
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
  width: 30rem;
  @media only screen and (max-width: 1300px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const StyledBottom = styled.div`
  margin-bottom: 2rem;
  div {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0 0 0;
  }
`;

export const StyledOrganizeButtons = styled.div`
  background: #1f3541;
  border: 0px solid #5e5e5e;
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  height: 4rem;
  align-items: center;
`;

export const StyledBigButton = styled.button`
  width: 33%;
  height: 3rem;
  display: flex;
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

export const StyledScroll = styled.div`
  height: 20rem;
`;

export const StyledFooter = styled.div`
  height: 4rem;
  width: 100%;
  background-color: ${colors.header};
  border-radius: 0px 0px 10px 10px;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  width: 19.5rem;
  align-items: center;
`;
