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

export const ContentWrapper = styled.div`
  transform: skew(10deg);
  left: 15vw;
  width: 50vw;
  position: absolute;
`;

export const ContentImage = styled.img`
  width: 70%;
  margin: 3vh 15% 5vh 15%;
  box-shadow: 1px 1px 4px 4px #00000033;
  -webkit-box-reflect: below 1vh
    linear-gradient(to bottom, transparent 90%, black);
`;

export const ContentStackWrapper = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  margin-bottom: 3vh;
`;

export const ContentStack = styled.img`
  width: 3vw;
`;

export const ContentDesc = styled.p`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  height: 10vh;
  overflow-y: scroll;
  position: relative;
  padding: 1vh 0;

  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff99;
  }
`;
