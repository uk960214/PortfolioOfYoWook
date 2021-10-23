import styled from "styled-components";

export const InfoContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const SocialLinksWrapper = styled.div`
  width: 8vw;

  padding: 1vh 1vw;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1vw;
  align-items: center;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;

export const ResumeButton = styled.button`
  margin: 2vh;
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
