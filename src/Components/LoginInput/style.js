import styled from "styled-components";

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 2px solid #000;
  width: 22.5rem;
  line-height: 3rem;
  height: 2rem;
  border-radius: 15px;
  margin: 0.5rem 0rem;
  padding-left: 0.5rem;

  svg {
    height: 1.3rem;
    width: 1.3rem;
  }
  input {
    border: none;
    width: 22.5rem;
    border-radius: 15px;
    outline: none;
    padding-left: 2rem;
    ::placeholder {
      padding-left: 0rem;
    }
  }
  .pass-icon {
    width: 50px;
    padding-left: 2px;
  }
`;
