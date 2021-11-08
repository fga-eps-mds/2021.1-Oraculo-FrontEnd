import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus, FaRegFileAlt } from "react-icons/fa";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { history } from "../../history";
import MainButton from "../../Components/MainButton";
import { createRecord } from "../../Services/Axios/processService";
import { getInfoUser } from "../../Services/Axios/profileService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pt from "date-fns/locale/pt-BR";
import {
  StyledBlueRectangle,
  StyledButtonsDiv,
  StyledCancelButton,
  StyledCreateButton,
  StyledDatePicker,
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

  useEffect(() => {
    async function getUser() {
      const user = await getInfoUser(toast);
      if (!user) {
        history.push("/login");
      }
      setCreatedBy(user.email);
    }
    getUser();
  }, []);

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

    await createRecord(record, toast);
    setCity("");
    setState("");
    setRequester("");
    setDocumentType("");
    setDocumentNumber("");
    setDocumentDate("");
    setDocumentDescription("");
    setSeiNumber("");
    setReceiptForm("");
    setContactInfo("");
    setCreatedBy("");
  }

  return (
    <>
      <HeaderWithButtons />
      <div>
        <StyledTitle>
          <p>Criar Registro</p>
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
                <form onSubmit={(event) => handleClick(event.preventDefault())}>
                  <div class="form-div">
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
                  <div class="form-div">
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
                  <div class="form-div">
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
                  <div class="form-div">
                    <h1>Tido de documento</h1>
                    <input
                      id="documentTypeInput"
                      type="text"
                      placeholder="Oficio, Despacho ..."
                      onChange={(event) => setDocumentType(event.target.value)}
                      value={documentType}
                    />
                  </div>
                  <div class="form-div">
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
                  <div class="form-div">
                    <h1>Data do documento</h1>
                  </div>

                  <DatePicker
                    id="documentDateInput"
                    class="form-div"
                    locale={pt}
                    placeholderText="dd/mm/aaaa"
                    onChange={(event) => {
                      setDocumentDate(event.toLocaleDateString());
                    }}
                    value={documentDate}
                    customInput={<StyledDatePicker />}
                  />
                  <div class="form-div">
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
                  <div class="form-div">
                    <h1>Nº do SEI</h1>
                    <input
                      id="seiNumberInput"
                      type="text"
                      placeholder="Nº do SEI"
                      onChange={(event) => setSeiNumber(event.target.value)}
                      value={seiNumber}
                    />
                  </div>
                  <div class="form-div">
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
                  <div class="form-div">
                    <h1>Informação de contato</h1>
                    <input
                      id="contactInfoInput"
                      type="text"
                      placeholder="contato@email.com"
                      onChange={(event) => setContactInfo(event.target.value)}
                      value={contactInfo}
                    />
                  </div>
                  <div class="form-div">
                    <h1>Tags</h1>
                    <button
                      type="button"
                      onClick={() => toast.error("Trabalho em progresso")}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <StyledButtonsDiv>
                    <StyledCancelButton
                      type="button"
                      onClick={() => window.history.back()}
                    >
                      Cancelar
                    </StyledCancelButton>
                    <StyledCreateButton type="submit">Criar</StyledCreateButton>
                  </StyledButtonsDiv>
                </form>
              </StyledForms>
            </StyledWhiteRectangle>
          </StyledProcessDiv>
        </StyledProcess>
        <Toaster
          toastOptions={{
            duration: 100000,
          }}
        />
      </div>
    </>
  );
};

export default CreateRecord;
