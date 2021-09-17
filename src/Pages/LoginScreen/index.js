import React, { useState } from "react";
import { FormLogin, StyledDiv } from "./styles";
import Logo from "../../Assets/logo-dark.svg";
import MainButton from "../../Components/MainButton";
import LoginInput from "../../Components/LoginInput/index";
import Header from "../../Components/Header";
import { FaUserCircle, FaLock } from "react-icons/fa";

function initialState() {
  return { userLogin: "", passwordLogin: "" };
}
const LoginScreen = () => {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
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
            valueInput={values.userLogin}
            onChangeInput={onChange}
          >
            <FaUserCircle />
          </LoginInput>
          <LoginInput
            idInput="passwordLogin"
            nameInput="passwordLogin"
            placeholderInput="Senha"
            inputType="password"
            valueInput={values.passwordLogin}
            onChangeInput={onChange}
          >
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
