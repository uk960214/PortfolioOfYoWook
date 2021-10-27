import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 80vw;
  height: 80%;
  position: relative;
  z-index: 5;
  background-color: #ffffffee;
  padding: 3vw;
  overflow-y: scroll;
  box-shadow: 1px 1px 4px 4px #00000033;

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

export const ContentTitle = styled.h1`
  text-align: center;
`;

export const ContentImage = styled.img`
  width: 70%;
  margin: 2% 15%;
  box-shadow: 1px 1px 4px 4px #00000033;
`;

export const ContentStackWrapper = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  margin-bottom: 2vh;
`;

export const ContentStack = styled.img`
  width: 3%;
`;

export const ContentWrapper = styled.div``;

export const ContentDesc = styled.p`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  padding: 1vh 0;
`;
