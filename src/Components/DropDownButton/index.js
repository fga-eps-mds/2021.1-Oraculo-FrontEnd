import React, { useState } from "react";
import DivSelectSetor from "./styles";

const DropDownButton = ({ onChangeOpt }) => {
  return (
    <DivSelectSetor>
      <select onChange={onChangeOpt}>
        <option name="selectSetorOpt" selected value="criminal">
          Criminal
        </option>
        <option name="selectSetorOpt" value="tecnologia">
          Tecnologia
        </option>
        <option name="selectSetorOpt" value="administrativa">
          Administrativo
        </option>
        <option name="selectSetorOpt" value="civil">
          civil
        </option>
      </select>
    </DivSelectSetor>
  );
};

export default DropDownButton;
