import styled from "styled-components";

export const InfoContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const SocialLinksWrapper = styled.div`
  width: 13vw;

  padding: 1vh 1vw;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1vw;
  align-items: center;

  @media screen and (min-width: 1920px) {
    width: 10vw;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  color: #5f5f5f;
  text-decoration: none;

  img {
    width: 70%;
  }
`;

export const ResumeButton = styled.a`
  padding: 1vh 2vw;

  border-radius: 3px;
  border: #ffffff 2px solid;

  background-color: #ffffff44;

  cursor: pointer;

  font-size: 1.2rem;
  font-family: "Raleway", sans-serif;
  color: #5f5f5f;
  text-decoration: none;
  &:hover {
    background-color: #ffffff99;
    transform: scale(1.05);
    box-shadow: 0 3px 2px #00000044;
  }
`;
