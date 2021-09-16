import styled from "styled-components";
export const styles = {};

export const FormLogin = styled.div`
  background-color: #f6f6f6;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 30rem;
    height: 31.5rem;
    border: 3px solid #1f3541;
    padding: 3.5rem;
    border-radius: 15px;
    background: #fff;
    align-items: center;
    box-sizing: border-box;

    justify-content: center;
    /* img {
      width: 100%;
      justify-content: center;
    } */

    input {
      width: 22.5rem;
      line-height: 3rem;
      height: 2rem;
      border-radius: 15px;
      margin: 0.5rem 0rem;
      ::placeholder {
        padding-left: 1rem;
      }
    }

    a {
      text-decoration: underline;
      color: #5289b5;
      text-align: right;
      width: 100%;
    }
  }
`;

export const StyledDiv = styled.div`
  display: grid;
  background: #fff;
  justify-items: center;
  button {
    margin: 2rem 0;
  }
`;
