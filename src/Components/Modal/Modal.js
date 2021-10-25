import React from "react";
import Projects from "../Projects/Projects";
import { ModalContainer } from "./Modal.elements";

const Modal = ({ openModal }) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      openModal();
    }
  };

  return (
    <ModalContainer onClick={onMaskClick}>
      <Projects />
    </ModalContainer>
  );
};

export default Modal;
