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
    .input-div {
      border: 2px solid #000000;
      border-radius: 12px;
      width: 22rem;
      height: 2rem;
      outline: none;
      background: #ffffff;
      display: flex;

      input {
        width: 90%;
        height: 100%;
        padding-left: 0.5rem;
        background: transparent;
        border: 0;
        line-height: 0;
        justify-content: center;
        align-items: center;
        box-shadow: none;
        :focus {
          outline: none;
        }

        ::placeholder {
          font-family: Open Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 33px;
          opacity: 0.7;
        }
      }
      .input-icon {
        width: 10%;
        justify-content: center;
        align-self: center;
      }
    }
  }
`;

export const StyledDiv = styled.div`
  display: grid;
  justify-items: center;
  .save-button {
    margin: 3.5rem 0;
    height: 2.5rem;
    width: 19.5rem;

    background-color: #5289b5;
    border: none;
    border-radius: 24px;
    color: #ffffff;
    cursor: pointer;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 20px;
    text-align: center;
    justify-content: center;
  }
`;
