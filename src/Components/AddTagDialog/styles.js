import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const StyledAlertDialog = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: black;
  justify-content: space-between;
  .headerDiv {
    a {
      text-align: left;
      width: fit-content;
    }

    button {
      top: 2rem;
      right: 2rem;
    }
  }
  span {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .checkBoxDiv {
    p {
      padding: 1rem 5rem 1rem 1rem;
      border: 1px solid black;
      margin: 0;
      border-radius: ${fonts.sizeSm};
    }
    a {
      margin-right: 1rem;
      cursor: pointer;
    }
    align-items: center;
    justify-content: space-around;
    width: 100%;
    display: flex;
    padding-top: 4rem;
  }

  .endOfPageDiv {
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: flex-end;
    button {
      margin-left: 1rem;
    }
  }

  input[type="checkbox"] {
    cursor: pointer;
    text-align: center;
    appearance: none;
    background-color: #ffffff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 2rem;
    height: 2rem;
    border: 0.15rem solid currentColor;
    border-radius: 0.4rem;
    transform: translateY(-0.075rem);
    display: grid;
    place-content: right;
  }

  input[type="checkbox"]::before {
    cursor: pointer;
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    transform: scale(0);
    transition: 80ms transform ease-in-out;
    box-shadow: inset 1rem 1rem var(--form-control-color);
    background-color: ${colors.blue};
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:after {
    content: attr(value);
  }
`;

export const CircleColor = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid #000000;
`;

export const TagList = styled.div`
  margin-bottom: 3rem;
`;

export const StyledCreateTag = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: black;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .input-section {
    width: 100%;
    justify-content: space-around;
    align-items: center;
    display: flex;
    input {
      padding: 1rem 5rem 1rem 1rem;
      border-radius: ${fonts.sizeSm};
      font-size: 1rem;
    }
    div {
      align-items: center;
      p {
        margin-right: 1rem;
      }
      display: flex;
    }
  }
  .endOfPageDiv {
    display: flex;
    width: 100%;
    margin-top: 10rem;
    align-content: center;
    justify-content: flex-end;
    button {
      margin-left: 1rem;
    }
  }
`;
