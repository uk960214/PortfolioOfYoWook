import styled from "styled-components";

export const Container = styled.div`
  margin: 10vh auto;
  ${(props) => `width: ${props.w}vw`};
  height: 80vh;
  transform: skew(10deg);
  border-right: 2px solid #444444;
  border-left: 2px solid #444444;

  transition: 1s;
  overflow: hidden;

  display: flex;
  justify-content: center;

  background-color: #ffffffcc;

  & * {
    transform: skew(-10deg);
  }
`;
