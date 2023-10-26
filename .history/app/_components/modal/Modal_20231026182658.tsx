"use client";
import React, { useState } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<boolean>(false);
  const handleToggleModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setActive(false);
    }
  };
  return (
    <div
      className={`w-screen h-screen fixed inset-0 bg-overlayModal text-white z-50 flex  transition-all duration-200 ${
        active ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={handleToggleModal}
    >
      <div className="bg-transparent flex-1"></div>
      <div className="bg-white w-[300px] sm:w-[450px]">{children}</div>
    </div>
  );
};

export default Modal;
