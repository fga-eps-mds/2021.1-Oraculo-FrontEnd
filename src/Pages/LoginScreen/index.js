import React, { useState } from "react";
import { FormLogin, StyledDiv } from "./styles";
import Logo from "../../Assets/logo-dark.svg";
import MainButton from "../../Components/MainButton";
import LoginInput from "../../Components/LoginInput/index";
import Header from "../../Components/Header";
import { FaUserCircle, FaLock } from "react-icons/fa";

function initilState() {
  return { userLogin: "", passwordLogin: "" };
}
const LoginScreen = () => {
  const [values, setValues] = useState(initilState);

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
            inInput="userLogin"
            nameInput="userLogin"
            placeholderInput="Usuário"
            inputType="email"
            onChangeInput={onChange}
            valueInput={values.user}
          >
            <FaUserCircle />
          </LoginInput>
          <LoginInput
            idInput="passwordLogin"
            nameInput="passwordLogin"
            placeholderInput="Senha"
            inputType="password"
            onChangeInput={onChange}
            valueInput={values.password}
          >
            <FaLock />
          </LoginInput>
          <StyledDiv>
            <a href="//">Esqueci minha Senha</a>
            {/* <button type="submit">Entrar</button> */}
            <MainButton title={"Entrar"} />
          </StyledDiv>
        </form>
      </FormLogin>
    </>
  );
};
export default LoginScreen;
