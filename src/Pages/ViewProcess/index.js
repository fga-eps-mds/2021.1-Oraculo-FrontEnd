import React from "react";
import Header from "../../Components/Header";
import { DivInfoProcess, DivShowProcess, DivSupProcess } from "./style";
import { FaUserCircle, FaTelegramPlane, FaPen } from "react-icons/fa";
import DropDownButton from "../../Components/DropDownButton";
import SectionMovBlock from "../../Components/SectionMovBlock";

const ViewProcess = () => {
  return (
    <>
      <Header />
      <DivSupProcess>
        <DivShowProcess>
          <div className="infoProcess">
            <div className="infoProcessicon">
              <p>Nº do SEI: 199.293.9485</p>
              <FaPen />
            </div>
            <span>Data de Emissão: 26/06/2020</span>
          </div>
          <SectionMovBlock />
        </DivShowProcess>
        <DivInfoProcess>
          <h2>Joana Depolice</h2>
          <hr></hr>
          <span>Emissor:</span>
          <div className="issuerIcon">
            <FaUserCircle />
            <p>Willian Cops</p>
          </div>
          <span>Setor:</span>

          <DropDownButton />

          <div className="fowardIcon">
            <a href="//">Encaminhar</a>
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
        </DivInfoProcess>
      </DivSupProcess>
    </>
  );
};

export default ViewProcess;
