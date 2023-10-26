import { CloseIcon } from "@/app/_icons";
import React from "react";

type TButtonClose = {
  closeModal: (value: boolean) => void;
};

const ButtonClose = (props: TButtonClose) => {
  return (
    <button onClick={() => props.closeModal(false)}>
      <CloseIcon />
    </button>
  );
};

export default ButtonClose;
