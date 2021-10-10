import styled from "styled-components";

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
