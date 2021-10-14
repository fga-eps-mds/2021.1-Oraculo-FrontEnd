import { FaUserCircle } from "react-icons/fa";
import { DivMovBlock, DivNodeBlock, StyledLine } from "./styles";

const SectionMovBlock = ({ fowardSector }) => {
  return (
    <>
      <DivNodeBlock>
        <StyledLine>
          <div></div>
        </StyledLine>
        <div className="content">
          <p>{fowardSector.setorOrigin} </p>
          <p>{fowardSector.dateFoward}</p>
        </div>
      </DivNodeBlock>
      <DivMovBlock>
        <div>
          <FaUserCircle />
          <p>{fowardSector.name}</p>
        </div>
        <div>
          <p>Processo enviado para o setor: {fowardSector.setor}</p>
          <p>{fowardSector.date}</p>
        </div>
      </DivMovBlock>
    </>
  );
};

export default SectionMovBlock;
