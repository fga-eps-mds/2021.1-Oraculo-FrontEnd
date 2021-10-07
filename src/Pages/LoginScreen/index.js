import React, { useState } from "react";
import { FaLock, FaUserCircle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Logo from "../../Assets/logo-dark.svg";
import Header from "../../Components/Header";
import LoginInput from "../../Components/LoginInput/index";
import MainButton from "../../Components/MainButton";
import { FormLogin, StyledDiv } from "./styles";
import { loginUser } from "../../Services/Axios/profileService";
import { login, STORAGE_KEY } from "../../Auth/Auth";
import { history } from "../../history";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleClick(event) {
        const user = { email, password };

        const result = await loginUser(user, toast);
        const auth = result?.auth;
        if (auth) {
            login(result.token);
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
                        idInput="email"
                        nameInput="email"
                        placeholderInput="Usuário"
                        inputType="email"
                        valueInput={email}
                        onChangeInput={(event) => setEmail(event.target.value)}>
                        <FaUserCircle />
                    </LoginInput>
                    <LoginInput
                        idInput="password"
                        nameInput="password"
                        placeholderInput="Senha"
                        inputType="password"
                        valueInput={password}
                        onChangeInput={(event) => setPassword(event.target.value)}>
                        <FaLock />
                    </LoginInput>
                    <StyledDiv>
                        <a href="/esqueci-senha">Esqueci minha Senha</a>
                        <MainButton
                            onClick={(event) => {
                                handleClick(event);
                            }}
                            title={"Entrar"}
                        />
                    </StyledDiv>
                </form>
                <Toaster />
            </FormLogin>
        </>
    );
};
export default LoginScreen;
