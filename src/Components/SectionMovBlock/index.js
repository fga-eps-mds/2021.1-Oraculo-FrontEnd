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
            forwardSector.setorOrigin === undefined
              ? "Necro (mock)"
              : forwardSector.setorOrigin}
          </p>
          <p>
            {forwardSector.dateForward === "" ||
            forwardSector.dateForward === undefined
              ? new Date().toLocaleDateString("pt-BR")
              : forwardSector.dateForward}
          </p>
        </div>
      </DivNodeBlock>
      <DivMovBlock>
        <div>
          <FaUserCircle />
          <p>{forwardSector.name}</p>
        </div>
        <div>
          <p> {forwardSector.defaultText ? forwardSector.defaultText : "Registro encaminhado para:"} {forwardSector.setor}</p>
          <p>{forwardSector.date}</p>
        </div>
        <p>{forwardSector.department}</p>
        <p>
          {forwardSector.reason} {forwardSector.reasonText}
        </p>
      </DivMovBlock>
    </>
  );
};

export default SectionMovBlock;
