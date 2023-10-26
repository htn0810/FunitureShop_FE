import React from "react";

const Modal = () => {
  return (
    <div className="w-screen h-screen fixed inset-0 bg-overlayModal text-white z-50 grid grid-cols-4">
      <div className="col-start-1 col-end-4 bg-transparent"></div>
      <div className="bg-white"></div>
    </div>
  );
};

export default Modal;
