import React from "react";

const Modal = () => {
  return (
    <div className="w-screen h-screen fixed inset-0 bg-overlayModal text-white z-50 flex">
      <div className="bg-transparent flex-1"></div>
      <div className="bg-white w-[300px] sm:w-[400px]"></div>
    </div>
  );
};

export default Modal;
