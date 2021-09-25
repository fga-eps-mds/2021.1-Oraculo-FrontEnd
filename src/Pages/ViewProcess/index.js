import React from "react";
import Header from "../../Components/Header";
import { DivInfoProcess, DivShowProcess, DivSupProcess } from "./style";
import { FaUserCircle, FaTelegramPlane } from "react-icons/fa";

const ViewProcess = () => {
  return (
    <>
      <Header />
      <DivSupProcess>
        <DivShowProcess>visualização de processos</DivShowProcess>
        <DivInfoProcess>
          <h2>Joana Depolice</h2>
          <hr></hr>
          <span>Emissor:</span>
          <div className="issuerIcon">
            <FaUserCircle />
            <p>Willian Cops</p>
          </div>
          <span>Setor:</span>
          {/*create component drop menu */}
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
