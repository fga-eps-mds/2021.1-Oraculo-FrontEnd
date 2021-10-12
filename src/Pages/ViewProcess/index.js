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
import toast, { Toaster } from "react-hot-toast";
import { getProcessByID } from "../../Services/Axios/processService";
import { getInfoUser } from "../../Services/Axios/profileService";

const ViewProcess = (props) => {
  const [sector, setSector] = useState("criminal");
  const [foward, setFoward] = useState([]);
  const [seiNumber, setSeiNumber] = useState("");
  const [documentDate, setDocumentDate] = useState("");
  const [requester, setRequester] = useState("");

  const [userName, setUserName] = useState("");
  const [userSetor, setUserSetor] = useState("");

  window.onload = async function getInitInfo() {
    const process = await getProcessByID(props.id, toast);
    setSeiNumber(process.sei_number);
    setDocumentDate(process.document_date);
    setRequester(process.requester);

    const user = await getInfoUser(toast);
    //substituir por nome quando implementar no back
    setUserName(user.email);
    setUserSetor(user.setor);
  };

  const handleButtonProcess = () => {
    setButtonModal(true);
  };

  const handleFoward = () => {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, "0");
    var mes = String(data.getMonth() + 1).padStart(2, "0");
    var ano = data.getFullYear();
    var dataAtual = dia + "/" + mes + "/" + ano;

    const newFoward = [
      ...foward,
      {
        setor: sector,
        setorOrigin: userSetor,
        date: dataAtual,
        dateFoward: dataAtual,
        name: userName,
      },
    ];
    setFoward(newFoward);
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

  const handleReopen = () => {
    alert("Em implementação");
  };

  const handleClickModalWhite = () => {
    setButtonModal(false);
  };

  return (
    <>
      <Header />
      <Toaster />
      <StyledDivSupProcess>
        <StyledDivShowProcess>
          <div className="infoProcess">
            <div className="infoProcessicon">
              <p>{seiNumber}</p>
              <FaPen />
            </div>
            <span>Data de Emissão: {documentDate}</span>
          </div>
          <FowardSector foward={foward} />

          <StyledDivButtons>
            <GenericWhiteButton title="voltar" onClick="" />
            <GenericRedButton
              title={buttonDone ? "Reabrir" : "Concluir"}
              onClick={buttonDone ? handleReopen : handleButtonProcess}
            />
          </StyledDivButtons>
        </StyledDivShowProcess>
        <StyledDivInfoProcess>
          <h2>{userName}</h2>
          <hr></hr>
          <span>Solicitante:</span>
          <div className="issuerIcon">
            <FaUserCircle />
            <p>{requester}</p>
          </div>
          <span>Divisão:</span>

          <DropDownButton
            onChangeOpt={(event) => setSector(event.target.value)}
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
      </StyledDivSupProcess>
    </>
  );
};

export default ViewProcess;
