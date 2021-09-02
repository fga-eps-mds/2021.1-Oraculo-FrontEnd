import styled from "styled-components";
import { colors, fonts } from "../styles/style";
import logo from "../../public/img/finger.png";
import Image from "next/image";

const StyledImg = styled.div`
  width: 10rem;
  height: 10rem;
  display: inline-block;
  padding-top: 3rem;
`;

const StyledDiv = styled.div`
  background: ${colors.gray2};
  width: 100vw;
  height: 100vh;
  text-align: center;
  justify-content: center;
`;

const StyledInput = styled.div`
  display: grid;
  margin: 0 35%;
  padding: 5rem 0;
  input {
    background: ${colors.white};
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
  }
  input:first-child {
    margin-bottom: 1.5rem;
  }
`;

const StyledButton = styled.button`
  background: #5ca8e6;
  border-radius: 50px;
  border: none;
  padding: 1rem 5rem;
  margin-bottom: 5rem;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;

  color: #ffffff;
  font-family: ${fonts.family};
  font-size: 3rem;
`;

export default function Home() {
  return (
    <StyledDiv>
      <StyledImg>
        <Image src={logo} alt="home logo" />
      </StyledImg>
      <StyledInput>
        <input placeholder="Login" type="email" />
        <input placeholder="Senha" type="password" />
      </StyledInput>
      <StyledButton>Entrar</StyledButton>
    </StyledDiv>
  );
}
