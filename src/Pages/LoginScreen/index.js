import React, { useState } from "react";
import { FormLogin, StyledDiv } from "./styles";
import Logo from "../../Assets/logo-dark.svg";
import MainButton from "../../Components/MainButton";
import LoginInput from "../../Components/LoginInput/index";
import Header from "../../Components/Header";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { history } from "../../history";
import { login } from "../../Auth/Auth";

const LoginScreen = () => {
  const [userLogin, setUserLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  function handleClick(event) {
    if (passwordLogin === "12345" && userLogin === "user@teste") {
      login(passwordLogin);
      history.push("/admin-page");
    }
  }

  return (
    <>
      <Header />
      <FormLogin>
        <form>
          <img src={Logo} alt="Logo" />
          <LoginInput
            idInput="userLogin"
            nameInput="userLogin"
            placeholderInput="Usuário"
            inputType="email"
            valueInput={userLogin}
            onChangeInput={(event) => setUserLogin(event.target.value)}
          >
            <FaUserCircle />
          </LoginInput>
          <LoginInput
            idInput="passwordLogin"
            nameInput="passwordLogin"
            placeholderInput="Senha"
            inputType="password"
            valueInput={passwordLogin}
            onChangeInput={(event) => setPasswordLogin(event.target.value)}
          >
            <FaLock />
          </LoginInput>
          <StyledDiv>
            <a href="//">Esqueci minha Senha</a>
            <MainButton onClick={handleClick} title={"Entrar"} />
          </StyledDiv>
        </form>
      </FormLogin>
    </>
  );
};
export default LoginScreen;
