import React from "react";
import { FormLogin } from "./styles";
//import Logo from '../../../public/'


const LoginScreen = () => {
  return (
      <FormLogin>
        <div>
            <input type="email" placeholder="Usuario" />
            <input type="password" placeholder="Senha" />
            <a>Esqueci minha Senha</a>
            <button>Entrar</button>
        </div>
      </FormLogin>
    
  );
};
export default LoginScreen;
