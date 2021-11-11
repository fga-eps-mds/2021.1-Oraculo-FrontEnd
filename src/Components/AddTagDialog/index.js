import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import GenericBlueButton from "../GenericBlueButton";
import GenericRedButton from "../GenericRedButton";

function AddTagDialog(props) {
  const confirmButtonText = props.cancelButtonTitle;
  const cancelButtonText = props.confirmButtonTitle;

  return toast(
    (t) => (
      <div>
        <span style={{ textAlign: "center" }}>
          <p>Um registro com o SEI </p>
          <p style={{ fontSize: "18px" }}>30 já existe. Deseja continuar?</p>
          <GenericBlueButton
            title={confirmButtonText}
            onClick={() => {
              toast.dismiss(t.id);
            }}></GenericBlueButton>
          <p></p>
          <GenericRedButton
            title={cancelButtonText}
            onClick={() => toast.dismiss(t.id)}></GenericRedButton>
        </span>
      </div>
    ),
    {
      position: "bottom-right",
    }
  );
}

export default AddTagDialog;
