"use client";
import React, { useState } from "react";

type TCartProps = {
  showModalCart: boolean;
  setShowModalCart: (value: boolean) => void;
  children: React.ReactNode;
};

const Modal = (props: TCartProps) => {
  const handleToggleModal = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === event.currentTarget) {
      props.setShowModalCart(false);
    }
  };
  return (
    <div
      className={`w-screen h-screen fixed inset-0 bg-overlayModal text-white z-50 flex  transition-all duration-200 ${
        props.showModalCart ? "transform-none" : "translate-x-full"
      }`}
    >
      <div className="bg-transparent flex-1" onClick={handleToggleModal}></div>
      <div className="bg-white w-[300px] sm:w-[450px]">{props.children}</div>
    </div>
  );
};

export default Modal;
