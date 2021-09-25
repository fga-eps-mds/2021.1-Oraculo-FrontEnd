import styled from "styled-components";

const DivSupProcess = styled.div`
  display: flex;
`;
const DivInfoProcess = styled.div`
  width: 35.5%;
  height: 90vh;
  background-color: #1f3541;
  color: white;
  font-size: 1rem;
  padding: 0 3%;
  box-sizing: border-box;
  h2 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
  }

  hr {
    border-color: #5289b5;
    margin: 1rem 15%;
  }

  span {
    text-align: left;
    font-size: 1.5rem;
  }

  .issuerIcon {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }

  .fowardIcon {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
    a {
      text-decoration: none;
      color: white;
      font-size: 1.125rem;
    }
    svg {
      margin: 0 1rem;
    }
  }

  .tagsTest {
    display: flex;
    span {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      margin: 1rem 0.5rem;
      background-color: red;
    }
    span:first-child {
      background-color: purple;
    }
    span:last-child {
      background-color: yellow;
    }
  }

  .historic {
    border: 2px solid #fff;
    border-radius: 10px;
    color: #fff;
    font-size: 1.5rem;
    display: block;
    text-align: center;
    margin-top: 2rem;
    padding: 0.7rem 3rem;
  }
`;

const DivShowProcess = styled.div`
  width: 64.5%;
`;

export { DivInfoProcess, DivShowProcess, DivSupProcess };
