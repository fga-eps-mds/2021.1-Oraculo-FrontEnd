import { FaUserCircle } from "react-icons/fa";
import { DivMovBlock, DivNodeBlock, StyledLine } from "./styles";

const SectionMovBlock = ({ forwardSector }) => {
  return (
    <>
      <DivNodeBlock>
        <StyledLine>
          <div></div>
        </StyledLine>
        <div className="content">
          <p>
            {forwardSector.setorOrigin === "" ||
            forwardSector.setorOrigin == undefined
              ? "Necro (mock)"
              : forwardSector.setorOrigin}
          </p>
          <p>
            {forwardSector.forwardDate == "" ||
            forwardSector.forwardDate == undefined
              ? new Date().toLocaleDateString("pt-BR")
              : forwardSector.forwardDate}
          </p>
        </div>
      </DivNodeBlock>
      <DivMovBlock>
        <div>
          <FaUserCircle />
          <p>{forwardSector.name}</p>
        </div>
        <div>
          <p>Registro encaminhado ao setor: {forwardSector.setor}</p>
          <p>{forwardSector.date}</p>
        </div>
      </DivMovBlock>
    </>
  );
};

export default SectionMovBlock;
