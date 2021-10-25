import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus, FaRegFileAlt } from "react-icons/fa";
import Header from "../../Components/Header";
import { history } from "../../history";
import MainButton from "../../Components/MainButton";
import { createRecord } from "../../Services/Axios/processService";
import { getInfoUser } from "../../Services/Axios/profileService";
import ModalShowRecordNum from "../../Components/ModalShowRecordNum";
import {
  StyledBlueRectangle,
  StyledButtonsDiv,
  StyledCancelButton,
  StyledCreateButton,
  StyledForms,
  StyledProcess,
  StyledProcessDiv,
  StyledTitle,
  StyledWhiteRectangle,
} from "./styles";

const CreateRecord = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [requester, setRequester] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [documentDate, setDocumentDate] = useState("");
  const [documentDescription, setDocumentDescription] = useState("");
  const [seiNumber, setSeiNumber] = useState("");
  const [receiptForm, setReceiptForm] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");

  const [triggerRec, setTrigger] = useState(false);

  useEffect(() => {
    async function getUser() {
      const user = await getInfoUser(toast);
      if (!user) {
        history.push("/login");
      }
      setCreatedBy(user.id);
    }
    getUser();
  });

  async function handleClick(event) {
    const record = {
      city: city,
      state: state,
      requester: requester,
      document_type: documentType,
      document_number: documentNumber,
      document_date: documentDate,
      description: documentDescription,
      sei_number: seiNumber,
      receipt_form: receiptForm,
      contact_info: contactInfo,
      situation: 2,
      created_by: createdBy,
    };

    const response = await createRecord(record, toast);

    if(response){
      setTrigger(true);
      setRegisterNumber(response);
    }
  }

  function handleModalClick(){
    setTrigger(false);
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
          <StyledProcessDiv>
            <StyledBlueRectangle>
              <FaRegFileAlt size="20rem" color="white" />
            </StyledBlueRectangle>

            <StyledWhiteRectangle>
              <StyledForms>
                <form>
                  <div>
                    <h1>Cidade</h1>
                    <input
                      id="cityInput"
                      type="text"
                      placeholder="Cidade (Obrigatório)"
                      required
                      onChange={(event) => setCity(event.target.value)}
                      value={city}
                    />
                  </div>
                  <div>
                    <h1>Estado</h1>
                    <input
                      id="stateInput"
                      type="text"
                      placeholder="Estado (Obrigatório)"
                      required
                      onChange={(event) => setState(event.target.value)}
                      value={state}
                    />
                  </div>
                  <div>
                    <h1>Solicitante</h1>
                    <input
                      id="requesterInput"
                      type="text"
                      placeholder="Solicitante (Obrigatório)"
                      required
                      onChange={(event) => setRequester(event.target.value)}
                      value={requester}
                    />
                  </div>
                  <div>
                    <h1>Tido de documento</h1>
                    <input
                      id="documentTypeInput"
                      type="text"
                      placeholder="Oficio, Despacho ..."
                      onChange={(event) => setDocumentType(event.target.value)}
                      value={documentType}
                    />
                  </div>
                  <div>
                    <h1>Nº do documento </h1>
                    <input
                      id="documentNumberInput"
                      type="text"
                      placeholder="Numero do Documento"
                      onChange={(event) =>
                        setDocumentNumber(event.target.value)
                      }
                      value={documentNumber}
                    />
                  </div>
                  <div>
                    <h1>Data do documento</h1>
                    <input
                      id="documentDateInput"
                      type="text"
                      placeholder="dd/mm/aaaa"
                      onChange={(event) => setDocumentDate(event.target.value)}
                      value={documentDate}
                    />
                  </div>
                  <div>
                    <h1>Descrição do documento</h1>
                    <input
                      id="documentDescriptionInput"
                      type="text"
                      placeholder="Ex: Solicita antecedentes ... (Obrigatório)"
                      required
                      onChange={(event) =>
                        setDocumentDescription(event.target.value)
                      }
                      value={documentDescription}
                    />
                  </div>
                  <div>
                    <h1>Nº do SEI</h1>
                    <input
                      id="seiNumberInput"
                      type="text"
                      placeholder="Nº do SEI"
                      onChange={(event) => setSeiNumber(event.target.value)}
                      value={seiNumber}
                    />
                  </div>
                  <div>
                    <h1>Recebido via</h1>
                    <input
                      id="receiptFormInput"
                      type="text"
                      placeholder="Física, E-mail, SEI (Obrigatório)"
                      required
                      onChange={(event) => setReceiptForm(event.target.value)}
                      value={receiptForm}
                    />
                  </div>
                  <div>
                    <h1>Informação de contato</h1>
                    <input
                      id="contactInfoInput"
                      type="text"
                      placeholder="contato@email.com"
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
                <StyledCreateButton
                  type="button"
                  onClick={(event) => handleClick(event)}
                >
                  Criar
                </StyledCreateButton>
              </StyledButtonsDiv>
            </StyledWhiteRectangle>
          </StyledProcessDiv>
        </StyledProcess>
        <Toaster />
        <ModalShowRecordNum onclick={handleModalClick} trigger={triggerRec} record_number={registerNumber}/>
      </div>
    </>
  );
};

export default CreateRecord;
