import styled from "styled-components";

export const styles = {};

export const StyledTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 49px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
    }
`;

export const StyledViewProfile = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const StyledBlueRectangle = styled.div`
    height: 38rem;
    width: 23rem;
    justify-content: center;

    border: none;
    border-radius: 20px 0px 0px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    background-color: #1f3541;
    display: flex;
    align-items: center;
`;

export const StyledWhiteRectangle = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 38rem;
    width: 48rem;

    border: none;
    border-radius: 0px 20px 20px 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    background-color: #ffffff;
`;

export const StyledForms = styled.div`
    padding-bottom: 4rem;
    form {
        align-items: baseline;
        margin-left: auto;
        div {
            box-sizing: border-box;
            h1 {
                text-align: left;
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 33px;
                color: #000000;
                margin-left: 11rem;
            }

            input {
                width: 26rem;
                height: 2rem;
                background: #ffffff;
                padding-left: 0.5rem;

                border-radius: 12px;
                border: 2px solid #000000;
                outline: none;

                ::placeholder {
                    font-family: Open Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 33px;
                    opacity: 0.7;
                }
            }

            button {
                width: 26.9rem;
                height: 2rem;
                background: #ffffff;
                padding: 0.55rem 0rem 1.55rem 1rem;
                align-items: center;

                border-radius: 12px;
                border: 2px solid #000000;
                text-align: left;
                cursor: pointer;
                svg {
                    font-size: 18px;
                    line-height: 33px;
                }
            }

            select {
                width: 26rem;
                height: 2.2rem;
                background: #ffffff;
                padding-left: 0.5rem;

                border-radius: 12px;
                border: 2px solid #000000;
                outline: none;
            }
        }
    }
`;

export const StyledButtonsDiv = styled.div`
    margin-left: 15rem;
    margin-top: 2em;
    button {
        margin-left: 1rem;
    }
`;

export const StyledBackButton = styled.button`
    width: 9.375rem;
    height: 2.5rem;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 20px;
    text-align: center;

    border: 1px solid #000000;
    border-radius: 15px;
    background: rgba(255, 255, 255, 1);
    cursor: pointer;
    border: 2px solid #000000;
`;

export const StyledRegisterButton = styled.button`
    width: 9.375rem;
    height: 2.5rem;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;

    border: none;
    border-radius: 15px;
    background: #5289b5;
    cursor: pointer;
`;
