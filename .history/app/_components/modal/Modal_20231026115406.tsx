import React from "react";

const Modal = () => {
  return (
    <div className="w-screen h-screen fixed inset-0 text-white z-50 grid grid-cols-6">
      <div className="col-start-1 col-end-5 bg-transparent"></div>
      <div className="bg-white"></div>
    </div>
  );
};

export default Modal;
