import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus, FaRegFileAlt } from "react-icons/fa";
import Header from "../../Components/Header";
import MainButton from "../../Components/MainButton";
import {
  StyledBlueRectangle,
  StyledButtonsDiv,
  StyledCancelButton,
  StyledCreateButton,
  StyledForms,
  StyledProcess,
  StyledTitle,
  StyledWhiteRectangle,
} from "./styles";

const CreateProcess = () => {
  const [registerNumber, setRegisterNumber] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [originLocation, setOriginLocation] = useState("");
  const [location, setLocation] = useState("");
  const [sourceDocument, setSourceDocument] = useState("");
  const [documentDescription, setDocumentDescription] = useState("");
  const [seiNumber, setSeiNumber] = useState("");
  const [receivedBy, setReceivedBy] = useState("");
  const [answerDocument, setAnswerDocument] = useState("");
  const [responseData, setResponseData] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  async function handleSubmit(event) {
    console.info(`evento: ${event}`);
  }

  return (
    <>
      <Header />
      <div>
        <StyledTitle>
          <p>Criar Processo</p>
          <div>
            <MainButton title={"Adicionar Campo"} />
          </div>
        </StyledTitle>

        <StyledProcess>
          <StyledBlueRectangle>
            <FaRegFileAlt size="20rem" color="white" />
          </StyledBlueRectangle>

          <StyledWhiteRectangle>
            <StyledForms>
              <form onSubmit={handleSubmit}>
                <div>
                  <h1>Número de registro</h1>
                  <input
                    id="registerNumberInput"
                    type="text"
                    placeholder="Número de registro"
                    value={registerNumber}
                    onChange={(event) => setRegisterNumber(event.target.value)}
                  />
                </div>
                <div>
                  <h1>Data de registro</h1>
                  <input
                    id="registerDate"
                    type="text"
                    placeholder="Data de registro"
                    onChange={(event) => setRegisterDate(event.target.value)}
                    value={registerDate}
                  />
                </div>
                <div>
                  <h1>Órgão de origem</h1>
                  <input
                    id="originLocationInput"
                    type="text"
                    placeholder="Órgão de origem"
                    onChange={(event) => setOriginLocation(event.target.value)}
                    value={originLocation}
                  />
                </div>
                <div>
                  <h1>Localidade</h1>
                  <input
                    id="locationInput"
                    type="text"
                    placeholder="Data de emissão"
                    onChange={(event) => setLocation(event.target.value)}
                    value={location}
                  />
                </div>
                <div>
                  <h1>Documento entrada / Número / Data</h1>
                  <input
                    id="sourceDocumentInput"
                    type="text"
                    placeholder="Documento de entrada"
                    onChange={(event) => setSourceDocument(event.target.value)}
                    value={sourceDocument}
                  />
                </div>
                <div>
                  <h1>Descrição do documento</h1>
                  <input
                    id="documentDescriptionInput"
                    type="text"
                    placeholder="Descrição do documento"
                    onChange={(event) =>
                      setDocumentDescription(event.target.value)
                    }
                    value={documentDescription}
                  />
                </div>
                <div>
                  <h1>Número do SEI</h1>
                  <input
                    id="seiNumberInput"
                    type="text"
                    placeholder="Número do SEI"
                    onChange={(event) => setSeiNumber(event.target.value)}
                    value={seiNumber}
                  />
                </div>
                <div>
                  <h1>Forma de recebimento</h1>
                  <input
                    id="receivedByInput"
                    type="text"
                    placeholder="Forma de recebimento"
                    onChange={(event) => setReceivedBy(event.target.value)}
                    value={receivedBy}
                  />
                </div>
                <div>
                  <h1>Documento de resposta / Número / Data</h1>
                  <input
                    id="answerDocumentInput"
                    type="text"
                    placeholder="Documento de resposta"
                    onChange={(event) => setAnswerDocument(event.target.value)}
                    value={answerDocument}
                  />
                </div>
                <div>
                  <h1>Dados de resposta</h1>
                  <input
                    id="responseDataInput"
                    type="text"
                    placeholder="Data de emissão"
                    onChange={(event) => setResponseData(event.target.value)}
                    value={responseData}
                  />
                </div>
                <div>
                  <h1>Contato para envio de resposta</h1>
                  <input
                    id="contactInfoInput"
                    type="text"
                    placeholder="Data de emissão"
                    onChange={(event) => setContactInfo(event.target.value)}
                    value={contactInfo}
                  />
                </div>
                <div>
                  <h1>Tags</h1>
                  <button>
                    <FaPlus />
                  </button>
                </div>
              </form>
            </StyledForms>
            <StyledButtonsDiv>
              <StyledCancelButton onClick={() => window.history.back()}>
                Cancelar
              </StyledCancelButton>
              <StyledCreateButton onClick={handleSubmit}>
                Criar
              </StyledCreateButton>
            </StyledButtonsDiv>
          </StyledWhiteRectangle>
        </StyledProcess>
        <Toaster />
      </div>
    </>
  );
};

export default CreateProcess;
