import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import Header from "../../Components/Header";
import { registerUser } from "../../Services/Axios/profileService";
import { SectionsList } from "./sections";

import {
    StyledBlueRectangle,
    StyledButtonsDiv,
    StyledBackButton,
    StyledRegisterButton,
    StyledForms,
    StyledViewProfile,
    StyledWhiteRectangle,
} from "./styles";

const ViewProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [department, setDepartment] = useState(1);
    const [level] = useState(2);

    async function handleClick(event) {
        const user = {
            email: email,
            password: password,
            departmentID: department,
            sectionID: department,
            level: level,
        };

        return registerUser(user, toast);
    }

    return (
        <>
            <Header />
            <div>
                <Toaster />
                <StyledViewProfile>
                    <StyledBlueRectangle>
                        <BiUserCircle size="20rem" color="white" />
                    </StyledBlueRectangle>

                    <StyledWhiteRectangle>
                        <StyledForms>
                            <form>
                                <div>
                                    <h1>Name</h1>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="William Cops"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </div>
                                <div>
                                    <h1>Email</h1>
                                    <input
                                        id="email"
                                        type="text"
                                        placeholder="william@pcgo.org.br"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div>
                                    <h1>Setor</h1>
                                    <select
                                        required
                                        placeholder="Selecione o departamento"
                                        onChange={(event) => {
                                            setDepartment(event.target.selectedIndex + 1);
                                        }}>
                                        <SectionsList />
                                    </select>
                                </div>
                                <div>
                                    <h1>Senha</h1>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Senha"
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        value={password}
                                    />
                                </div>
                            </form>
                        </StyledForms>
                        <StyledButtonsDiv>
                            <StyledBackButton
                                type="button"
                                onClick={() => window.history.back()}>
                                Voltar
                            </StyledBackButton>
                            <StyledRegisterButton
                                type="button"
                                onClick={(event) => handleClick(event)}>
                                Cadastrar
                            </StyledRegisterButton>
                        </StyledButtonsDiv>
                    </StyledWhiteRectangle>
                </StyledViewProfile>
            </div>
        </>
    );
};

export default ViewProfile;
