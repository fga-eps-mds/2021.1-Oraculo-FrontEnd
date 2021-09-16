import styled from "styled-components";

export const styles = {};

export const StyledTitle = styled.h1`
  position: absolute;
  width: 24.063rem;
  height: 2.625rem;
  left: 24rem;
  top: 9.625rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

export const StyledBlueRectangle = styled.div`
  position: absolute;
  left: 22rem;
  top: 17rem;
  height: 38rem;
  width: 23rem;

  border: none;
  border-radius: 20px 0px 0px 20px;

  background-color: #1f3541;
  display: flex;
  align-items: center;
`;

export const StyledPaperSheet = styled.div`
  position: absolute;
  left: 22%;
  height: 17rem;
  width: 13rem;

  background-color: #ffffff;
  display: flex;
`;

export const StyledCut = styled.div`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-top: 65px solid #1f3541;
  border-left: 65px solid #ffffff;
  width: 0;
`;
