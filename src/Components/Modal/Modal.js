import React from "react";
import Projects from "../Projects/Projects";
import { ModalContainer } from "./Modal.elements";

const Modal = ({ index, openModal, scroll }) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      openModal();
    }
  };

  return (
    <ModalContainer onClick={onMaskClick} scroll={scroll}>
      <Projects dataIndex={index} />
    </ModalContainer>
  );
};

export default Modal;
