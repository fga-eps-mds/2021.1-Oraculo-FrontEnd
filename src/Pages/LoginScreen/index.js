import React from "react";
import { FormLogin, StyledDiv } from "./styles";
import Logo from "../../Assets/logo-dark.svg";
import MainButton from "../../Components/MainButton";

const LoginScreen = () => {
  return (
    <FormLogin>
      <form>
        <img src={Logo} />
        <div>
          <input type="email" placeholder="Usuario" />
        </div>
        <input type="password" placeholder="Senha" />
        <StyledDiv>
          <a>Esqueci minha Senha</a>
          <MainButton title={"Entrar"} />
        </StyledDiv>
      </form>
    </FormLogin>
  );
};
export default LoginScreen;
