import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../Components/Header";
import MainButton from "../../Components/MainButton";
import { FormLogin, StyledDiv } from "./styles";
import { loginUser } from "../../Services/Axios/profileService";
import { login } from "../../Auth/Auth";
import { withRouter } from "react-router";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }

  setPassword(newPass) {
    this.setState({ password: newPass });
  }

  async handleClick(event) {
    const user = { password: this.state.password };
    const result = await loginUser(user, toast);
    const auth = result?.auth;
    if (auth) {
      login(result.token);
      this.props.history.push("/admin-page");
    }
  }

  render() {
    return (
      <>
        <Header />
        <FormLogin>
          <form>
            <StyledDiv>
              <h1>Alterar Senha</h1>
              <h2>Nova senha:</h2>
              <input placeholder="Nova senha" />
              <h2>Confirme a senha:</h2>
              <input placeholder="Confirme a senha" />
              <MainButton
                onClick={() => toast.error("Não foi possivel alterar a senha")}
                title={"Salvar"}
              />
            </StyledDiv>
          </form>
          <Toaster />
        </FormLogin>
      </>
    );
  }
}

export default withRouter(LoginScreen);
