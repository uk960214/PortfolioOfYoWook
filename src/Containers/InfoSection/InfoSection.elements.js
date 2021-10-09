import styled from "styled-components";

export const InfoContainer = styled.section`
  position: fixed;
  right: 0;
  top: 3vh;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SocialLinksWrapper = styled.div`
  width: 20vw;

  padding: 2vh 3vw;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.5vw;
  align-items: center;

  background-color: #ffffff55;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;

export const ResumeButton = styled.button`
  margin: 2vh 2vw 0 0;
  width: 15vw;
  padding: 1vh 0;

  border-radius: 3px;
  border: #ffffff 2px solid;

  background-color: #ffffff44;

  cursor: pointer;

  font-size: 1.2rem;
  font-family: "Raleway", sans-serif;

  &:hover {
    background-color: #ffffff99;
    transform: scale(1.05);
    box-shadow: 0 3px 2px #00000044;
  }
`;
