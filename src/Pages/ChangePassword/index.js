import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { FormLogin, StyledDiv } from "./styles";
import { changeUserPassword } from "../../Services/Axios/profileService";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleClick(event) {
    password === confirmPassword
      ? await changeUserPassword(toast, password)
      : toast.error("As senhas devem ser iguais!");

    setPassword("");
    setConfirmPassword("");
  }

  return (
    <>
      <HeaderWithButtons />
      <FormLogin>
        <form onSubmit={(event) => handleClick(event.preventDefault())}>
          <StyledDiv>
            <h1>Alterar Senha</h1>

            <h2>Nova senha:</h2>
            <input
              id="newPassword"
              type="text"
              required
              placeholder="Nova senha"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />

            <h2>Confirme a senha:</h2>
            <input
              id="confirmNewPassword"
              type="text"
              required
              placeholder="Confirme a senha"
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
            />

            <button class="save-button" type="submit">
              Salvar
            </button>
          </StyledDiv>
        </form>
        <Toaster />
      </FormLogin>
    </>
  );
};

export default ChangePassword;
