import styled from "styled-components";

export const Container = styled.div`
  margin: 5vh 10vw;
  ${(props) => `width: ${props.w}vw`};
  height: 70vh;
  transform: skew(-10deg);
  border-right: 1px solid #444444;
  border-left: 1px solid #444444;

  transition: 0.3s ease-in-out;
  overflow: hidden;
  position: relative;
`;

export const ContentSection = styled.section`
  transform: skew(10deg);
  left: 15vw;
  width: 50vw;
  position: absolute;
`;
