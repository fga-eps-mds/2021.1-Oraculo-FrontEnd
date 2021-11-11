import React from "react";
import GenericBlueButton from "../GenericBlueButton";
import GenericWhiteButton from "../GenericWhiteButton";
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
        <div>
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

export { ModalDoubleCheck };
