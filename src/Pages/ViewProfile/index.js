import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import Header from "../../Components/Header";
import { getInfoUser } from "../../Services/Axios/profileService";

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
          <Header />
          <div>
            <StyledViewProfile>
              <StyledBlueRectangle>
                <BiUserCircle size="20rem" color="white" />
              </StyledBlueRectangle>

              <StyledWhiteRectangle>
                <StyledForms>
                  <form>
                    <div>
                      <h1>Name</h1>
                      <input id="name" type="text" placeholder="William Cops" />
                    </div>
                    <div>
                      <h1>Email</h1>
                      <input
                        id="email"
                        type="text"
                        placeholder="william@pcgo.org.br"
                        value={user.email}
                      />
                    </div>
                    <div>
                      <h1>Setor</h1>
                      <input
                        id="sectorNum"
                        type="text"
                        placeholder="Setor"
                        value={
                          user.sections[0] != undefined
                            ? user.sections[0].name
                            : "erro"
                        }
                      />
                    </div>
                  </form>
                </StyledForms>
                <StyledButtonsDiv>
                  <StyledBackButton onClick={() => window.history.back()}>
                    Voltar
                  </StyledBackButton>
                  <StyledEditButton
                    onClick={() =>
                      toast.error("Essa função estará disponível em breve")
                    }
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
