import React from "react";
import { StyledDivModal } from "./style";
import GenericBlueButton from "../GenericBlueButton";
const ModalShowRecordNum = ({record_number,trigger, onclick}) =>{
    return trigger ? (
        <StyledDivModal>
            <div>
                <p>Registro cadastrado pelo numero:</p>
                <p className="registerNum">{record_number}</p>
                <GenericBlueButton title="OK" onClick={onclick}/>
            </div>
        </StyledDivModal>
    ) : ("");

}

export default ModalShowRecordNum;