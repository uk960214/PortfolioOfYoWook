import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 80vw;
  height: 80vh;
  position: relative;
  z-index: 5;
  background-color: #ccc;
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
