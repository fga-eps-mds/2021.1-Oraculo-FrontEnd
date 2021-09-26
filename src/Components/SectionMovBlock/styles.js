import styled from "styled-components";

const DivNodeBlock = styled.div`
  display: flex;
  padding: 10%;

  div {
    width: 2px;
    height: 10rem;
    background: #5289b5;
  }
`;

const DivMovBlock = styled.div`
  background: #fff;
  border-radius: 15px;
  border: 1px solid #000;
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
export { DivMovBlock, DivNodeBlock };
