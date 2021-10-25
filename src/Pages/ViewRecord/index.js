import React, { useEffect, useState } from "react";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import {
  StyledDivInfoProcess,
  StyledDivShowProcess,
  StyledDivSupProcess,
  StyledDivButtons,
} from "./style";
import { FaUserCircle, FaTelegramPlane, FaPen } from "react-icons/fa";
import DropDownButton from "../../Components/DropDownButton";
import ForwardSector from "../../Components/ForwardSector";
import GenericWhiteButton from "../../Components/GenericWhiteButton";
import GenericRedButton from "../../Components/GenericRedButton";
import toast, { Toaster } from "react-hot-toast";
import { getProcessByID } from "../../Services/Axios/processService";
import { getInfoUser } from "../../Services/Axios/profileService";

const ViewRecord = (props) => {
  const [sector, setSector] = useState("criminal");
  const [forward, setForward] = useState([]);
  const [seiNumber, setSeiNumber] = useState("");
  const [documentDate, setDocumentDate] = useState("");
  const [requester, setRequester] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");

  const [userName, setUserName] = useState("");
  const [userSector, setUserSector] = useState("");

  useEffect(() => {
    async function fetchRecordData() {
      const record = await getProcessByID(props.id, toast);
      setSeiNumber(record.sei_number);
      setDocumentDate(record.document_date);
      setRequester(record.requester);
      setCity(record.city);
      setState(record.state);
      setDescription(record.description);
      setState(record.state);

      const user = await getInfoUser(toast);

      setUserName(user.name);
      setUserSector(user.sections[0].name);
    }

    fetchRecordData();
  });

  const handleButtonProcess = () => {
    toast.loading("Estamos trabalhando nisso ... :)", { duration: 3000 });
  };

  const handleForward = () => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();
    let currentDate = day + "/" + month + "/" + year;

    const newForward = [
      ...forward,
      {
        setor: sector,
        setorOrigin: userSector,
        date: currentDate,
        dateForward: currentDate,
        name: userName,
      },
    ];
    setForward(newForward);
  };

  return (
    <>
      <HeaderWithButtons />
      <Toaster />
      <StyledDivSupProcess>
        <StyledDivShowProcess>
          <div className="infoProcess">
            <div className="infoProcessicon">
              <p>
                {seiNumber === "" || seiNumber == undefined
                  ? "153040/123"
                  : seiNumber}
              </p>
              <FaPen />
            </div>
            <span>
              Data de inclusão:{" "}
              {documentDate === "" ? "15/12/1945" : documentDate}
            </span>
            <p className="info-record"><span>{city}-{state} </span> |<span> {requester} </span>|<span> {description}</span></p>
          </div>
          <ForwardSector forward={forward} />

          <StyledDivButtons>
            <GenericWhiteButton title="voltar" onClick={handleButtonProcess} />
            <GenericRedButton title="concluir" onClick={handleButtonProcess} />
          </StyledDivButtons>
        </StyledDivShowProcess>
        <StyledDivInfoProcess>
          <span>Servidor:</span>
          <div className="issuerIcon">
            <FaUserCircle />
            <p>{userName === "" ? "Policia Federal (mock)" : userName}</p>
          </div>
          <span>Divisão:</span>

          <DropDownButton
            onChangeOpt={(event) => setSector(event.target.value)}
          />

          <div className="fowardIcon">
            <p onClick={handleForward}>Encaminhar</p>
            <FaTelegramPlane />
          </div>
          <span>Tags:</span>
          <div className="tagsTest">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <a className="historic" href="/historico-registro">
            Histórico de alterações
          </a>
        </StyledDivInfoProcess>
      </StyledDivSupProcess>
    </>
  );
};

export default ViewRecord;
