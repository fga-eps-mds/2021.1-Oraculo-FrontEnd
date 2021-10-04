import React from "react";
import DivSelectSetor from "./styles";

const DropDownButton = () => {
  return (
    <DivSelectSetor>
      <select>
        <option claaname="selectSetorOpt" selected value="criminal">
          Criminal
        </option>
        <option claaname="selectSetorOpt" value="tecnologia">
          Tecnologia
        </option>
        <option claaname="selectSetorOpt" value="administrativa">
          Administrativo
        </option>
        <option claaname="selectSetorOpt" value="civil">
          civil
        </option>
      </select>
    </DivSelectSetor>
  );
};

export default DropDownButton;
