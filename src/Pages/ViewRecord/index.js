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
import {
  forwardRecordInfo,
  getProcessByID,
  getRecordHistory,
} from "../../Services/Axios/processService";
import { getInfoUser, getSections } from "../../Services/Axios/profileService";
import { getInfoUserbyID } from "../../Services/Axios/profileService";
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
  const [userSectorNum, setUserSectorNum] = useState("");
  const [userID, setUserID] = useState("");

  const [sections, setSections] = useState("");

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
      setUserID(user.id);
      setUserSector(user.sections[0].name);
      setUserSectorNum(user.sections[0].id);

      const responseHR = await getRecordHistory(toast, props.id);
      const arrInfoForward = await Promise.all(responseHR.map((post) => previousForward(post)));
      setForward(arrInfoForward);

    }
    fetchRecordData();
  }, []);

  const handleButtonProcess = () => {
    toast.loading("Estamos trabalhando nisso ... :)", { duration: 3000 });
  };

  const handleForward = async () => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();
    let currentDate = day + "/" + month + "/" + year;

    const forwardRecInfo = {
      id: props.id,
      forwarded_by: userID,
      origin_id: userSectorNum,
      destination_id: sector,
    };

    const infoRecord = await forwardRecordInfo(toast, forwardRecInfo);

    const newForward = [
      ...forward,
      {
        setor: infoRecord.forwarded_to,
        setorOrigin: infoRecord.forwarded_from,
        date: currentDate,
        dateForward: currentDate,
        name: infoRecord.forwarded_by,
      },
    ];
    setForward(newForward);
  };


  const previousForward = async (response) => {
    const infoUser = await getInfoUserbyID(response.forwarded_by);

    const destinationID = response.destination_id;
    const allSections2 = await getSections();
    const destinationSection = allSections2.filter(async (indice) => {
      if (indice.id === destinationID) {
        console.log(indice.name);
        return indice.name;
      }
    });

    let date = new Date();
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();
    let currentDate = day + "/" + month + "/" + year;

    const newForward =
      {
        setor: destinationID,
        setorOrigin: infoUser.user.sections[0].name,
        date: currentDate,
        dateForward: currentDate,
        name: infoUser.user.name,
      };
    return newForward;
  };

  return (
    <>
      <HeaderWithButtons />
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
            <p className="info-record">
              <span>
                {city}-{state}{" "}
              </span>{" "}
              |<span> {requester} </span>|<span> {description}</span>
            </p>
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
          <span>Departamento:</span>

          <DropDownButton
            onChangeOpt={(event) => setSector(event.target.value)}
          />

          <div className="forwardIcon">
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
      <Toaster />
    </>
  );
};

export default ViewRecord;
