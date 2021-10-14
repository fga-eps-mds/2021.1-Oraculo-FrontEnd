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
import {
  getProcessByID,
  fowardRegisterDep,
  setStatusRecord,
} from "../../Services/Axios/processService";
import { getInfoUser } from "../../Services/Axios/profileService";
import { ModalDoubleCheck } from "../../Components/ModalDoubleCheck";

const getDate = () => {
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  var ano = data.getFullYear();
  var dataAtual = dia + "/" + mes + "/" + ano;
  return dataAtual;
};
const ViewProcess = (props) => {
  const [sector, setSector] = useState("criminal");
  const [foward, setFoward] = useState([]);
  const [seiNumber, setSeiNumber] = useState("");
  const [documentDate, setDocumentDate] = useState("");
  const [requester, setRequester] = useState("");
  const [situationReg, setSituation] = useState("");

  const [userName, setUserName] = useState("");
  const [userSetor, setUserSetor] = useState("");
  const [userSectionID, setUserSectionID] = useState("");

  const [buttonModal, setButtonModal] = useState("");

  window.onload = async function getInitInfo() {
    const process = await getProcessByID(props.id, toast);

    setSeiNumber(process.sei_number);
    setDocumentDate(process.document_date);
    setRequester(process.requester);
    //mostra processo concluido e muda botão

    if (process.situation == 1) {
      const newFoward = [
        ...foward,
        {
          name: "NOME",
          defaultText: "Registro: Concluido",
          date: getDate(),
        },
      ];
      setFoward(newFoward);
      setButtonModal(false);
      setButtonDone(true);
    }

    const user = await getInfoUser(toast);
    //substituir por nome quando implementar no back
    setUserName(user.email);
    setUserSetor(user.sections[0].name);
    console.log(user.sections[0].name);
    setUserSectionID(user.sections[0].id);
  };

  const handleButtonProcess = () => {
    setButtonModal(true);
  };

  async function handleFoward() {
    const response = await fowardRegisterDep(userSectionID, props.id, toast);

    if (response) {
      const newFoward = [
        ...foward,
        {
          defaultText: "processo enviado para o setor",
          setor: sector,
          setorOrigin: userSetor,
          date: getDate(),
          dateFoward: getDate(),
          name: userName,
        },
      ];
      setFoward(newFoward);
    }
  }

  const [buttonDone, setButtonDone] = useState(false);
  const handleClickModalRed = () => {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, "0");
    var mes = String(data.getMonth() + 1).padStart(2, "0");
    var ano = data.getFullYear();
    var dataAtual = dia + "/" + mes + "/" + ano;

    const newFoward = [
      ...foward,
      {
        name: "NOME",
        defaultText: "Registro: Concluido",
        date: dataAtual,
      },
    ];

    setStatusRecord(props.id, 1, toast);
    setFoward(newFoward);
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
