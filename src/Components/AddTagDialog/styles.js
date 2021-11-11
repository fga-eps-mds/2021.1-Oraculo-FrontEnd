import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const StyledAlertDialog = styled.div`
  box-shadow: black;
  .headerDiv {
    a {
      text-align: left;
      width: fit-content;
    }

    button {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }

  .checkBoxDiv {
    position: absolute;
    padding-top: 5rem;
    input {
    }
  }

  .endOfPageDiv {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    align-content: center;
    justify-content: space-between;
    button {
      margin-left: 0.5rem;
    }
  }

  input[type="checkbox"] {
    position: absolute;
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
