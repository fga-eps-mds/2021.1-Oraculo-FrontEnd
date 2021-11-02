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
import { useParams } from "react-router";
const ViewRecord = () => {
  const { id } = useParams();
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

  useEffect(() => {
    async function fetchRecordData() {
      const record = await getProcessByID(id, toast);
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

      const responseHR = await getRecordHistory(toast,id);
      const arrInfoForward = await Promise.all(responseHR.map((post) => previousForward(post)));
      setForward(arrInfoForward);

    }
    fetchRecordData();
  }, [forward]);

  const handleButtonProcess = () => {
    toast.loading("Estamos trabalhando nisso ... :)", { duration: 3000 });
  };

  const handleForward = async () => {
    const forwardRecInfo = {
      id: id,
      forwarded_by: userID,
      origin_id: userSectorNum,
      destination_id: sector,
    };

    const infoRecord = await forwardRecordInfo(toast, forwardRecInfo);
  };

  const previousForward = async (response) => {
    const infoUser = await getInfoUserbyID(response.forwarded_by);

    const destinationID = response.destination_id;
    const allSections2 = await getSections();
    console.log("Allsec", allSections2);
    const destinationSection = allSections2.filter((indice) => {
        return indice.id == destinationID;
      
    });

    let dataCreated = new Date(response.createdAt);
    let dataFormatadaCreatedAt = ((dataCreated.getDate())) + "/" + ((dataCreated.getMonth() + 1)) + "/" + dataCreated.getFullYear();
    let dataUpdated = new Date(response.updatedAt);
    let dataFormatadaUpdatedAt = ((dataUpdated .getDate() )) + "/" + ((dataUpdated .getMonth() + 1)) + "/" + dataUpdated .getFullYear(); 

    const newForward =
      {
        setor: destinationSection[0].name,
        setorOrigin: infoUser.user.sections[0].name,
        date: dataFormatadaCreatedAt,
        dateForward: dataFormatadaUpdatedAt,
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
