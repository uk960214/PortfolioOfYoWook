import styled from "styled-components";

export const Container = styled.div`
  margin: 10vh auto;
  ${(props) => `width: ${props.w}vw`};
  height: 60vh;
  transform: skew(-10deg);
  border-right: 2px solid #444444;
  border-left: 2px solid #444444;

  transition: 0.5s ease-in-out;
  overflow: hidden;

  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: skew(10deg);
    position: fixed;
    width: 40vw;
    position: absolute;
  }

  img {
    width: 100%;
  }
`;
