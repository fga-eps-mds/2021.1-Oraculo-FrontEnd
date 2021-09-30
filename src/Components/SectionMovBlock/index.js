import React, { useState } from "react";
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
          <p classNme="setorValue">Setor: {fowardSector.setor} </p>
          <p>26/02/2021</p>
        </div>
      </DivNodeBlock>
      <DivMovBlock>
        <div>
          <FaUserCircle />
          <p>Evandro Nascimento</p>
        </div>
        <div>
          <p>Processo enviado para o setor: {fowardSector.setor}</p>
          <p>{fowardSector.data}</p>
        </div>
      </DivMovBlock>
    </>
  );
};

export default SectionMovBlock;
