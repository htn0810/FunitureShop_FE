"use client";
import React from "react";

type TCartProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  children: React.ReactNode;
};

const Modal = (props: TCartProps) => {
  const handleToggleModal = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === event.currentTarget) {
      props.setShowModal(false);
    }
  };
  return (
    <div
      className={`w-screen min-h-screen fixed inset-0 bg-overlayModal z-50 flex  transition-all duration-300 ease-in ${
        props.showModal ? "transform-none" : "translate-x-full"
      }`}
    >
      <div className="bg-transparent flex-1" onClick={handleToggleModal}></div>
      <div className="bg-white w-[320px] sm:w-[450px]">{props.children}</div>
    </div>
  );
};

export default Modal;
