import React from "react";
import { FormLogin, StyledDiv } from "./styles";
import Logo from "../../Assets/logo-dark.svg";
import MainButton from "../../Components/MainButton";
import LoginInput from "../../Components/LoginInput/index";
import Header from "../../Components/Header";
import { FaUserCircle, FaLock } from "react-icons/fa";

const LoginScreen = () => {
  return (
    <>
      <Header />
      <FormLogin>
        <form>
          <img src={Logo} alt="Logo" />
          <LoginInput placeholderInput="Usuário" inputType="email">
            <FaUserCircle />
          </LoginInput>
          <LoginInput placeholderInput="Senha" inputType="password">
            <FaLock />
          </LoginInput>
          <StyledDiv>
            <a href="//">Esqueci minha Senha</a>
            <MainButton title={"Entrar"} />
          </StyledDiv>
        </form>
      </FormLogin>
    </>
  );
};
export default LoginScreen;
