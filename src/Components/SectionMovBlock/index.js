import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { DivMovBlock, DivNodeBlock } from "./styles";

const SectionMovBlock = () => {
  return (
    <>
      <DivNodeBlock>
        <div></div>
        <ul>
          <li>
            <p>Setor: X</p>
            <p>26/02/2021</p>
          </li>
        </ul>
      </DivNodeBlock>
      <DivMovBlock>
        <div>
          <FaUserCircle />
          <p>Evandro Nascimento</p>
        </div>
        <div>
          <p>Processo enviado para o setor:X</p>
          <p>26/02/2021</p>
        </div>
      </DivMovBlock>
    </>
  );
};

export default SectionMovBlock;
