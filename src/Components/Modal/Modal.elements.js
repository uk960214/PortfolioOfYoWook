import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: ${(props) => props.scroll}px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff99;
  z-index: 5;
`;
