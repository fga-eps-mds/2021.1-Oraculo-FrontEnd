import styled from "styled-components";
export const styles = {};

export const FormLogin = styled.div`
  background-color: #f6f6f6;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 30rem;
    height: 28rem;
    border: 3px solid #1f3541;
    padding: 3.5rem;
    border-radius: 15px;
    background: #fff;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;

    h1 {
      text-align: center;
      width: 100%;
      font-size: 40px;
    }

    h2 {
      text-align: left;
      width: 100%;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 0px;
    }

    img {
      width: 100%;
      justify-content: center;
    }

    input {
      width: 22rem;
      height: 2rem;
      background: #ffffff;
      padding-left: 0.5rem;

      border-radius: 12px;
      border: 2px solid #000000;
      outline: none;

      ::placeholder {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 33px;
        opacity: 0.7;
      }
    }
  }
`;

export const StyledDiv = styled.div`
  display: grid;
  justify-items: center;
  button {
    margin: 3.5rem 0;
  }
`;
