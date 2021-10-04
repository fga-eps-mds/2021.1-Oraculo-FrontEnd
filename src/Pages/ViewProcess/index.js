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
import {
  ModalDoubleCheck,
  ModalReopenProcess,
} from "../../Components/ModalDoubleCheck";

const ViewProcess = () => {
  const [buttonModal, setButtonModal] = useState(false);
  const handleButtonProcess = () => {
    setButtonModal(true);
  };

  const [foward, setFoward] = useState("criminal");
  const [sectors, setSectors] = useState([]);
  const handleFoward = () => {
    const newSectors = [
      ...sectors,
      {
        defaultText: "Processo enviado para o setor",
        setor: foward,
        setorOrigin: "Criminal",
        date: "26/07/2010",
        dateFoward: "29/09/2021",
        name: "José carlos",
      },
    ];
    setSectors(newSectors);
  };

  const [buttonDone, setButtonDone] = useState(false);
  const handleClickModalRed = () => {
    const newSectors = [
      ...sectors,
      {
        defaultText: "Registro: Concluido",
        setorOrigin: "Criminal",
        name: "José carlos",
        date: "27/09/2021",
      },
    ];
    setSectors(newSectors);
    setButtonModal(false);
    setButtonDone(true);

    document.querySelector(".fowardIcon").style.display = "none";
  };

  const [buttonModalReopen, setbuttonModalReopen] = useState(false);
  const handleReopen = () => {
    setbuttonModalReopen(true);
  };

  const [reason, setReason] = useState("");
  const handleClickModalBlue = () => {
    if (reason != "") {
      const newSectors = [
        ...sectors,
        {
          defaultText: "Registro: Reaberto",
          department: "Departamento: Criminal",
          reason: "Motivo:",
          reasonText: reason,
          setorOrigin: "Criminal",
          name: "José carlos",
          date: "27/09/2021",
        },
      ];
      setSectors(newSectors);
      setbuttonModalReopen(false);
      setButtonDone(false);

      document.querySelector(".fowardIcon").style.display = "";
    } else {
      alert("ERRO: Motivo obrigatório");
    }
  };

  const handleClickModalWhite = () => {
    setButtonModal(false);
    setbuttonModalReopen(false);
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
            <GenericWhiteButton title="voltar" onClick="" />
            <GenericRedButton
              title={buttonDone ? "Reabrir" : "Concluir"}
              onClick={buttonDone ? handleReopen : handleButtonProcess}
            />
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
            <button onClick={handleFoward}>Encaminhar</button>
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

        <ModalDoubleCheck
          content="Você tem certeza que quer confirmar esse Registro?"
          trigger={buttonModal}
          titleRedButton="Concluir"
          titleWhiteButton="Cancelar"
          onClickRedButton={handleClickModalRed}
          onClickWhiteButton={handleClickModalWhite}
        />

        <ModalReopenProcess
          trigger={buttonModalReopen}
          titleBlueButton="Reabrir"
          titleWhiteButton="Cancelar"
          onClickBlueButton={handleClickModalBlue}
          onClickWhiteButton={handleClickModalWhite}
          onChange={(event) => setReason(event.target.value)}
        />
      </StyledDivSupProcess>
    </>
  );
};

export default ViewProcess;
