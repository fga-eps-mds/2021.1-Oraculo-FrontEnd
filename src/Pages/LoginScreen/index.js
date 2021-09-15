import React from "react";
import styles from "./styles";

const LoginScreen = () => {
  return (
    <div>
      <form>
        <input type="email" placeholder="Usuario" />
        <input type="password" placeholder="Senha" />
        <button>Esqueci minha Senha</button>
        <button>Entrar</button>
      </form>
    </div>
  );
};
export default LoginScreen;
