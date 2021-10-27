import React from "react";
import Projects from "../Projects/Projects";
import { ModalContainer } from "./Modal.elements";

const Modal = ({ openModal, scroll }) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      openModal();
    }
  };

  return (
    <ModalContainer onClick={onMaskClick} scroll={scroll}>
      <Projects />
    </ModalContainer>
  );
};

export default Modal;
