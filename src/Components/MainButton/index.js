import { StyledButton } from "./style";

const MainButton = ({ title, onClick }) => (
    <StyledButton type="button" onClick={onClick}>
        {title}
    </StyledButton>
);

export default MainButton;
