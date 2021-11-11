import { useState } from "react";
import Modal from "react-modal";
import { StyledAlertDialog } from "./styles";
import GenericBlueButton from "../GenericBlueButton";
import GenericWhiteButton from "../GenericWhiteButton";
import { Checkbox } from "antd";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "30vw",
    height: "50vh",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TagModal = ({ onVisibleChanged }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    onVisibleChanged(false);
  }

  return (
    <div>
      <Modal
        isOpen={true}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Selecione uma tag"
        style={modalStyle}
      >
        <StyledAlertDialog>
          <span>
            <h2>Escolha uma tag</h2>
            <div className="headerDiv">
              <GenericBlueButton title="Criar tag"></GenericBlueButton>
            </div>
          </span>
          <div className="checkBoxDiv">
            <Checkbox>Text</Checkbox>
          </div>
          <div className="endOfPageDiv">
            <GenericBlueButton title="Adicionar"> </GenericBlueButton>
            <GenericWhiteButton
              title="Cancelar"
              onClick={closeModal}
            ></GenericWhiteButton>
          </div>
        </StyledAlertDialog>
      </Modal>
    </div>
  );
};

export { TagModal };
