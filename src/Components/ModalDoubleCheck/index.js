import React from "react";
import GenericWhiteButton from "../GenericWhiteButton";
import GenericBlueButton from "../GenericBlueButton";
import { StyledContainerModal } from "./styles";

const ModalDoubleCheck = ({
  content,
  titleBlueButton,
  onClickBlueButton,
  titleWhiteButton,
  onClickWhiteButton,
  trigger,
}) => {
  return trigger ? (
    <>
      <StyledContainerModal>
        <div className="modalContainerConfirm">
          <p>{content}</p>
          <GenericWhiteButton
            title={titleWhiteButton}
            onClick={onClickWhiteButton}
          />
          <GenericBlueButton title={titleBlueButton} onClick={onClickBlueButton} />
        </div>
      </StyledContainerModal>
    </>
  ) : (
    ""
  );
};

const ModalReopenProcess = ({
  onChange,
  titleBlueButton,
  onClickBlueButton,
  titleWhiteButton,
  onClickWhiteButton,
  trigger,
}) => {
  return trigger ? (
    <>
      <StyledContainerModal>
        <div className="modalContainerReopen">
          <p>Reabertura de um registro</p>
          <span>Motivo:</span>
          <textarea required onChange={onChange}></textarea>
          <div>
            <GenericWhiteButton
              title={titleWhiteButton}
              onClick={onClickWhiteButton}
            />
            <GenericBlueButton
              title={titleBlueButton}
              onClick={onClickBlueButton}
            />
          </div>
        </div>
      </StyledContainerModal>
    </>
  ) : (
    ""
  );
};

export { ModalDoubleCheck, ModalReopenProcess };
