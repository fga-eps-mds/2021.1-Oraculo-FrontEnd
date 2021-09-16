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

  div {
    position: absolute;
    top: 10px;
    left: 45rem;
    height: 4rem;
    width: 24rem;
  }
`;

export const StyledBlueRectangle = styled.div`
  position: absolute;
  left: 22rem;
  top: 17rem;
  height: 38rem;
  width: 23rem;

  border: none;
  border-radius: 20px 0px 0px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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

export const StyledWhiteRectangle = styled.div`
  position: absolute;
  left: 45rem;
  top: 17rem;
  height: 38rem;
  width: 48rem;

  border: none;
  border-radius: 0px 20px 20px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  background-color: #ffffff;
  display: flex;
`;

export const StyledForms = styled.div`
  form {
    position: absolute;
    display: flex;
    flex-flow: column;
    align-items: baseline;

    top: 1rem;
    left: 20%;

    h1 {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 33px;
      display: flex;
      align-items: center;
      color: #000000;
    }

    input {
      width: 26rem;
      height: 2rem;
      background: #ffffff;

      border-radius: 12px;
      border: 2px solid #000000;

      ::placeholder {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 33px;
      }
    }
  }
`;

export const StyledCancelButton = styled.button`
  position: absolute;
  width: 9.375rem;
  height: 2.5rem;
  bottom: 2.5rem;
  left: 22rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  text-align: center;

  border: 1px solid #000000;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  cursor: pointer;
  border: 2px solid #000000;
`;

export const StyledCreateButton = styled.button`
  position: absolute;
  width: 9.375rem;
  height: 2.5rem;
  bottom: 2.5rem;
  left: 32rem;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;

  border: none;
  border-radius: 15px;
  background: #5289b5;
  cursor: pointer;
`;
