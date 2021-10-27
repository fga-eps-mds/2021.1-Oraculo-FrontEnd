import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const styles = {};

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    font-family: ${fonts.font};
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 49px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${colors.black};
  }
`;

export const StyledProcess = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledProcessDiv = styled.div`
  justify-content: center;
  display: flex;
  width: 71rem;
  height: 70vh;
  padding-bottom: 4rem;
`;
export const StyledBlueRectangle = styled.div`
  width: 40%;
  justify-content: center;
  border: none;
  border-radius: 20px 0px 0px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.header};
  display: flex;
  align-items: center;
`;

export const StyledWhiteRectangle = styled.div`
  width: 60%;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-radius: 0px 20px 20px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${colors.white};
`;

export const StyledForms = styled.div`
  padding-bottom: 4rem;
  form {
    margin-left: auto;
    .form-div {
      box-sizing: border-box;
      h1 {
        text-align: left;
        font-family: ${fonts.font};
        font-style: normal;
        font-weight: normal;
        font-size: ${fonts.sizeLg};
        line-height: 33px;
        color: ${colors.black};
        margin: 1rem 0 0 15%;
      }

      input {
        width: 70%;
        height: 2rem;
        background: ${colors.white};
        padding-left: 0.5rem;
        border-radius: ${radius.sizeSm};
        border: 2px solid ${colors.black};
        outline: none;

        ::placeholder {
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: ${fonts.sizeLg};
          line-height: 33px;
          opacity: 0.7;
        }
      }

      button {
        width: 72%;
        height: 2rem;
        background: ${colors.white};
        padding: 0.55rem 0rem 1.55rem 1rem;
        align-items: center;

        border-radius: ${radius.sizeSm};
        border: 2px solid ${colors.black};
        text-align: left;
        cursor: pointer;
        svg {
          font-size: 18px;
          line-height: 33px;
        }
      }
    }
  }
`;

export const StyledButtonsDiv = styled.div`
  display: flex;
  float: right;
  width: 65%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const StyledCancelButton = styled.button`
  width: 9.375rem;
  height: 2.5rem;

  font-family: ${fonts.font};
  font-style: normal;
  font-weight: bold;
  font-size: ${fonts.sizeXlg};

  border: 1px solid ${colors.black};
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  cursor: pointer;
  border: 2px solid ${colors.black};
`;

export const StyledCreateButton = styled.button`
  width: 9.375rem;
  height: 2.5rem;
  margin-left: 2rem;

  font-family: ${fonts.font};
  font-style: normal;
  font-weight: bold;
  font-size: ${fonts.sizeXlg};
  line-height: 20px;
  text-align: center;
  color: ${colors.white};

  border: none;
  border-radius: ${radius.sizeMd};
  background: ${colors.primary};
  cursor: pointer;
`;
