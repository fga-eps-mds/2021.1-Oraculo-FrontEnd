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
            {forwardSector.dateForward == "" ||
            forwardSector.dateForward == undefined
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
<<<<<<< HEAD
          <p>
            {fowardSector.defaultText}: {fowardSector.setor}
          </p>
          <p>{fowardSector.date}</p>
=======
          <p>Registro encaminhado para: {forwardSector.setor}</p>
          <p>{forwardSector.date}</p>
>>>>>>> 404118ac8fd55609e53f9f33795178a20e28790b
        </div>
      </DivMovBlock>
    </>
  );
};

export default SectionMovBlock;
