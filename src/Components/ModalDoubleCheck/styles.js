import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

const StyledContainerModal = styled.div`
  position: fixed;
  display: grid;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);

  .modalContainerConfirm {
    text-align: center;
    background: ${colors.white};
    color: ${colors.black};
    border-radius: ${radius.sizeMd};
    margin: auto;
    width: 42rem;
    height: 15rem;
    p {
      width: 100%;
      padding: 1rem;
      font-size: ${fonts.sizeXXlg};
    }
    button {
      margin-left: 2rem;
    }
  }
  .modalContainerReopen {
    background: ${colors.white};
    color: ${colors.black};
    border-radius: ${radius.sizeMd};
    margin: auto;
    width: 35rem;
    height: 30rem;
    padding: 3rem;

    p,
    span {
      font-size: ${fonts.sizeXXlg};
      width: 100%;
    }

    textarea {
      box-sizing: border-box;
      width: 100%;
      height: 18rem;
      margin: 1rem;
      padding: 1rem;
      border-radius: ${radius.sizeMd};
      outline: none;
      font-size: ${fonts.sizeLg};
    }
    div {
      width: 100%;
      text-align: right;
      button:first-child {
        margin-right: 2rem;
      }
    }
  }
`;

export { StyledContainerModal };
