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

  div {
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
`;

export { StyledContainerModal };
