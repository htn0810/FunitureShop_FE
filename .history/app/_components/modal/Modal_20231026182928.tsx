"use client";
import React, { useState } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<boolean>(false);
  const handleToggleModal = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === event.currentTarget) {
      setActive(false);
    }
  };
  return (
    <div
      className={`w-screen h-screen fixed inset-0 bg-overlayModal text-white z-50 flex  transition-all duration-200 ${
        active ? "translate-x-full" : "transform-none"
      }`}
    >
      <div className="bg-transparent flex-1" onClick={handleToggleModal}></div>
      <div className="bg-white w-[300px] sm:w-[450px]">{children}</div>
    </div>
  );
};

export default Modal;
