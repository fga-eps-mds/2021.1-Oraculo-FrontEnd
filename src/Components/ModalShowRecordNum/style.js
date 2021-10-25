import styled from "styled-components";
import { colors, fonts, radius } from "../../style";
export const StyledDivModal=styled.div`
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
    box-sizing: border-box;
    padding:0 2rem;
    width: 30rem;
    height: 15rem;
    p{
        font-size: ${fonts.sizeXXlg};
    }
    .registerNum{
        font-weight: bold;
    }
  }
`;