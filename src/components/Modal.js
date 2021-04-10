import React from "react";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleBackdropClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="backdrop" onClick={handleBackdropClick}>
      <img src={selectedImage} className="modal-image" />
    </div>
  );
};

export default Modal;
