import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleBackdropClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        className="modal-image"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Modal;
