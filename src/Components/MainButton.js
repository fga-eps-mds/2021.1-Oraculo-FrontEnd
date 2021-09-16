import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 11rem;
  right: 24rem;
  height: 4rem;
  width: 24rem;

  background-color: #5289b5;
  border: none;
  border-radius: 24px;
  color: #ffffff;
  cursor: pointer;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 20px;
  text-align: center;
  justify-content: center;
`;

const MainButton = ({ title }) => <StyledButton>{title}</StyledButton>;

export default MainButton;
