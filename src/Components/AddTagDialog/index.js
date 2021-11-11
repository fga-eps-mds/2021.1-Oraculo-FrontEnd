import React, { useState, useEffect } from "react";
import { Modal, Button, Checkbox } from "antd";
import { StyledAlertDialog } from "./styles";
import GenericRedButton from "../GenericRedButton";
import GenericBlueButton from "../GenericBlueButton";
import toast from "react-hot-toast";

const AddTagDialog = ({ onVisibleChanged }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleOk = () => {
    setIsModalVisible(false);
    onVisibleChanged(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    onVisibleChanged(false);
  };

  return (
    <>
      <StyledAlertDialog>
        <div>
          <div className="headerDiv">
            <p>Escolha a tag</p>
            <GenericBlueButton
              title="Criar Tag"
              onClick={() =>
                toast.loading("Em progresso ...", { duration: 2000 })
              }></GenericBlueButton>
          </div>
          <div className="buttonsDiv">
            <span>
              <GenericRedButton
                title="Cancelar"
                onClick={() => onVisibleChanged(false)}></GenericRedButton>
              <GenericBlueButton title="Adicionar"></GenericBlueButton>
            </span>
          </div>
          <div className="checkBoxDiv">
            <Checkbox>Tag 1</Checkbox>
            <Checkbox>Tag 2</Checkbox>
            <Checkbox>Tag 3</Checkbox>
          </div>
        </div>
      </StyledAlertDialog>
    </>
  );
};

export default AddTagDialog;
