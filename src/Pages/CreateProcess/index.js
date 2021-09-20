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
  const [seiNumber, setSeiNumber] = useState("");
  const [emitter, setEmitter] = useState("");
  const [sector, setSector] = useState("");
  const [issueDate, setIssueDate] = useState("");

  async function handleSubmit(event) {
    console.info(`evento: ${event}`);

    let request = axios.post("http://localhost:8000/processos", {
      seiNumber: seiNumber,
      emitter: emitter,
      sector: sector,
      issueDate: issueDate,
    });

    request.then(
      async (ok) => {
        toast.success("Processo criado");
      },
      async (error) => {
        console.error(`failed to send request ${error}`);
        toast.error("Falha ao criar processo");
      }
    );
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
                  <h1>Emissor</h1>
                  <input
                    id="emitter"
                    type="text"
                    placeholder="Emissor"
                    value={emitter}
                    onChange={(event) => setEmitter(event.target.value)}
                  />
                </div>
                <div>
                  <h1>N° do SEI</h1>
                  <input
                    id="seiNum"
                    type="text"
                    placeholder="N° do SEI"
                    onChange={(event) => setSeiNumber(event.target.value)}
                    value={seiNumber}
                  />
                </div>
                <div>
                  <h1>Setor</h1>
                  <input
                    id="sectorNum"
                    type="text"
                    placeholder="Setor"
                    onChange={(event) => setSector(event.target.value)}
                    value={sector}
                  />
                </div>
                <div>
                  <h1>Data de Emissão</h1>
                  <input
                    id="issueDate"
                    type="text"
                    placeholder="Data de Emissão"
                    onChange={(event) => setIssueDate(event.target.value)}
                    value={issueDate}
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
