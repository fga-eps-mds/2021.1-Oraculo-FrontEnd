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

    setUserName(user.name);
    setUserSetor(user.sections[0].name);
  };

  const handleButtonProcess = () => {
    alert("Função ainda nao implementada");
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
            <GenericWhiteButton title="voltar" onClick={handleButtonProcess} />
            <GenericRedButton title="concluir" onClick={handleButtonProcess} />
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
