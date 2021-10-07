import React, { useState } from "react";
import Header from "../../Components/Header";
import {
  StyledDivInfoProcess,
  StyledDivShowProcess,
  StyledDivSupProcess,
  StyledDivButtons,
} from "./style";
import { FaUserCircle, FaTelegramPlane, FaPen } from "react-icons/fa";
import DropDownButton from "../../Components/DropDownButton";
import FowardSector from "../../Components/FowardSetor";
import GenericWhiteButton from "../../Components/GenericWhiteButton";
import GenericRedButton from "../../Components/GenericRedButton";

const ViewProcess = () => {
  const handleButtonProcess = () => {
    alert("Função ainda nao implementada");
  };
  const [foward, setFoward] = useState("criminal");

  const [sectors, setSectors] = useState([]);

  const handleFoward = () => {
    console.log(foward);
    const newSectors = [
      ...sectors,
      {
        setor: foward,
        setorOrigin: "criminal",
        date: "26/07/2010",
        dateFoward: "29/09/2021",
        name: "nome default encarregado",
      },
    ];
    setSectors(newSectors);
  };

  return (
    <>
      <Header />
      <StyledDivSupProcess>
        <StyledDivShowProcess>
          <div className="infoProcess">
            <div className="infoProcessicon">
              <p>Nº do SEI: 199.293.9485</p>
              <FaPen />
            </div>
            <span>Data de Emissão: 26/06/2020</span>
          </div>
          <FowardSector sectors={sectors} />

          <StyledDivButtons>
            <GenericWhiteButton title="voltar" onClick={handleButtonProcess} />
            <GenericRedButton title="concluir" onClick={handleButtonProcess} />
          </StyledDivButtons>
        </StyledDivShowProcess>
        <StyledDivInfoProcess>
          <h2>Joana Depolice</h2>
          <hr></hr>
          <span>Emissor:</span>
          <div className="issuerIcon">
            <FaUserCircle />
            <p>Willian Cops</p>
          </div>
          <span>Setor:</span>

          <DropDownButton
            onChangeOpt={(event) => setFoward(event.target.value)}
          />

          <div className="fowardIcon">
            <p onClick={handleFoward}>Encaminhar</p>
            <FaTelegramPlane />
          </div>
          <span>Tags:</span>
          <div className="tagsTest">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <a className="historic" href="//">
            Histórico de alterações
          </a>
        </StyledDivInfoProcess>
      </StyledDivSupProcess>
    </>
  );
};

export default ViewProcess;
