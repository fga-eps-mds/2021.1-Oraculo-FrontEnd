import styled from "styled-components";

const StyledButton = styled.button`
  height: 2.5rem;
  width: 19.5rem;

  background-color: #5289b5;
  border: none;
  border-radius: 24px;
  color: #ffffff;
  cursor: pointer;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  justify-content: center;
`;

const MainButton = ({ title }) => <StyledButton>{title}</StyledButton>;

export default MainButton;
