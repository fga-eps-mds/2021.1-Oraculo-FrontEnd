import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { FormLogin, StyledDiv } from "./styles";
import { changeUserPassword } from "../../Services/Axios/profileService";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const [isRevealConfirmPassword, setIsRevealConfirmPassword] = useState(false);

  async function handleClick() {
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
            <div className="input-div">
              <input
                type={isRevealPassword ? "text" : "password"}
                required
                placeholder="Nova senha"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              {isRevealPassword ? (
                <FaRegEye
                  className="input-icon"
                  onClick={() => setIsRevealPassword(!isRevealPassword)}
                />
              ) : (
                <FaRegEyeSlash
                  className="input-icon"
                  onClick={() => setIsRevealPassword(!isRevealPassword)}
                />
              )}
            </div>

            <h2>Confirme a senha:</h2>
            <div className="input-div">
              <input
                type={isRevealConfirmPassword ? "text" : "password"}
                required
                placeholder="Confirme a senha"
                onChange={(event) => setConfirmPassword(event.target.value)}
                value={confirmPassword}
              />
              {isRevealConfirmPassword ? (
                <FaRegEye
                  className="input-icon"
                  onClick={() =>
                    setIsRevealConfirmPassword(!isRevealConfirmPassword)
                  }
                />
              ) : (
                <FaRegEyeSlash
                  className="input-icon"
                  onClick={() =>
                    setIsRevealConfirmPassword(!isRevealConfirmPassword)
                  }
                />
              )}
            </div>

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
