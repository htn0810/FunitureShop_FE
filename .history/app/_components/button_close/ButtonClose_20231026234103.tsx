import { CloseIcon } from "@/app/_icons";
import React from "react";

type TButtonClose = {
  closeModal: (value: boolean) => void;
};

const ButtonClose = (props: TButtonClose) => {
  return (
    <button
      className="absolute top-4 right-4 z-50"
      onClick={() => props.closeModal(false)}
    >
      <CloseIcon />
    </button>
  );
};

export default ButtonClose;
