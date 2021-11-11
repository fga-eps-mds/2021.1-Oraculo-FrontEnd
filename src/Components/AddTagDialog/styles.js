import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const StyledAlertDialog = styled.div`
  position: fixed;
  display: grid;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  align-self: center;
  backdrop-filter: initial;

  div {
    .buttonsDiv {
      background: #00ff22;
      width: fit-content;
      height: fit-content;
      text-align: left;
      margin-right: 2rem;
      padding-top: 52vh;
      bottom: 0;
    }

    .headerDiv {
      height: fit-content;
      background: #00ffaa;
      text-align: right;

      p {
        width: fit-content;
        font-size: ${fonts.sizeXXlg};
        text-align: left;
        background: #aaffff;
      }
    }

    .checkBoxDiv {
      height: fit-content;
      width: fit-content;
      left: 0;
      top: 0;
      text-align: left;
      background: #aaffaa;
      margin-bottom: 10rem;

      input {
        color: red;
        background: #a2b3f4;
      }
    }

    text-align: center;
    background: ${colors.white};
    color: ${colors.black};
    border-radius: ${radius.sizeMd};
    margin: auto;
    width: 50vw;
    height: 80vh;
  }
`;
