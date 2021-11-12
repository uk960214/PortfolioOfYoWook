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
    z-index: 5;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    z-index: 5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00000099;
    z-index: 5;
  }
`;

export const ContentTitle = styled.h1`
  text-align: center;
`;

export const ContentImageWrapper = styled.div`
  position: relative;
  width: 70%;
  margin: 2% 15%;
  box-shadow: 1px 1px 4px 4px #00000033;
`;

export const ContentImage = styled.img`
  width: 100%;
  max-height: 70vh;
  /* height: 100%; */
  object-fit: contain;
`;

export const ContentStackWrapper = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  margin-bottom: 2vh;
`;

export const ContentStack = styled.img`
  height: 5vh;
`;

export const ContentWrapper = styled.div``;

export const ContentDesc = styled.p`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  padding: 1vh 0;
  line-height: 1.5;
  width: 60%;
  margin: auto;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
  margin: 2vh 0;
`;

export const Links = styled.a`
  font-size: 1.25rem;
  color: #777777;
`;
