import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { getInfoUser, updateUser } from "../../Services/Axios/profileService";

import {
  StyledBlueRectangle,
  StyledButtonsDiv,
  StyledBackButton,
  StyledEditButton,
  StyledForms,
  StyledViewProfile,
  StyledWhiteRectangle,
} from "./styles";

class ViewProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loaded: false,
      newName: "",
      newSector: "",
    };
  }

  componentDidMount() {
    getInfoUser(toast).then((userInfo) => {
      this.setState({ user: userInfo, loaded: true });
    });
  }

  setName(newPass) {
    this.setState({ password: newPass });
  }

  setEmail(newMail) {
    this.setState({ email: newMail });
  }

  setDepartment(newDepartment) {
    this.setState({ password: newDepartment });
  }

  async handleClick(event) {
    const updatedUser = {
      email: this.state.email,
      name: this.state.name,
      department: this.state.department,
    };
    await updateUser(updatedUser, toast);
  }

  render() {
    const { user } = this.state;

    if (!this.state.loaded) {
      return (
        <>
          <p>Carregando ...</p>
        </>
      );
    } else {
      return (
        <>
          <HeaderWithButtons />
          <div>
            <StyledViewProfile>
              <StyledBlueRectangle>
                <BiUserCircle size="20rem" color="white" />
              </StyledBlueRectangle>

              <StyledWhiteRectangle>
                <StyledForms>
                  <form>
                    <div>
                      <h1>Nome</h1>
                      <input
                        id="name"
                        type="text"
                        placeholder="William Cops"
                        defaultValue={user.name}
                        onChange={(event) => this.setName(event.target.value)}
                      />
                    </div>
                    <div>
                      <h1>Email</h1>
                      <input
                        id="email"
                        type="text"
                        placeholder="william@pcgo.org.br"
                        defaultValue={user.email}
                        onChange={(event) => this.setEmail(event.target.value)}
                      />
                    </div>
                    <div>
                      <h1>Departamento</h1>
                      <input
                        id="sectionID"
                        type="text"
                        placeholder="Setor"
                        defaultValue={user.sections[0].number}
                        onChange={(event) => this.setDepartment(event.target.value)}
                      />
                    </div>
                  </form>
                </StyledForms>
                <StyledButtonsDiv>
                  <StyledBackButton onClick={() => window.history.back()}>
                    Voltar
                  </StyledBackButton>
                  <StyledEditButton
                    onClick={(event) => {
                      this.handleClick(event);
                    }}
                  >
                    Editar
                  </StyledEditButton>
                </StyledButtonsDiv>
              </StyledWhiteRectangle>
            </StyledViewProfile>
            <Toaster />
          </div>
        </>
      );
    }
  }
}

export default ViewProfile;
