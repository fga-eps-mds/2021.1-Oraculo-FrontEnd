import React from "react";
import GenericRedButton from "../GenericRedButton";
import GenericWhiteButton from "../GenericWhiteButton";
import { StyledContainerModal } from "./styles";

const ModalDoubleCheck = ({
  content,
  titleRedButton,
  onClickRedButton,
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
          <GenericRedButton title={titleRedButton} onClick={onClickRedButton} />
        </div>
      </StyledContainerModal>
    </>
  ) : (
    ""
  );
};

export { ModalDoubleCheck };
