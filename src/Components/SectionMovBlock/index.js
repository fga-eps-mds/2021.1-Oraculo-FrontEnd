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
          <p>Setor: {fowardSector.setorOrigin} </p>
          <p>{fowardSector.dateFoward}</p>
        </div>
      </DivNodeBlock>
      <DivMovBlock>
        <div>
          <FaUserCircle />
          <p>{fowardSector.name}</p>
        </div>
        <div className="infoSetor">
          <p>
            {fowardSector.defaultText}: {fowardSector.setor}
          </p>
          <p>{fowardSector.date}</p>
        </div>
        <p>{fowardSector.department}</p>
        <p>
          {fowardSector.reason} {fowardSector.reasonText}
        </p>
      </DivMovBlock>
    </>
  );
};

export default SectionMovBlock;
