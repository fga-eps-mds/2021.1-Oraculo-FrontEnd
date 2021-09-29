import styled from "styled-components";
import { fonts, colors, radius } from "../../style";

const DivNodeBlock = styled.div`
  display: flex;
  padding: 0 2rem;

  .content {
    display: flex;
    p {
      margin-left: 2rem;
    }
    align-items: center;
  }
`;

const StyledLine = styled.div`
  width: 2px;
  height: 10rem;
  background: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3.5px solid ${colors.primary};
    width: 1px;
    height: 1px;
  }
`;

const DivMovBlock = styled.div`
  background: ${colors.white};
  border-radius: ${radius.sizeMd};
  border: 1px solid ${colors.black};
  padding: 0rem 2rem 0.5rem;
  div {
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
      width: 2rem;
      height: 2rem;
    }
  }
  div:last-child {
    justify-content: space-between;
  }
`;
export { DivMovBlock, DivNodeBlock, StyledLine };
