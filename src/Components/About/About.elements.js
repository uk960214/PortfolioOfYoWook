import styled from "styled-components";

export const AboutSection = styled.section``;

export const AboutContainer = styled.div`
  display: flex;
  gap: 3vw;
`;

export const Profile = styled.img`
  width: 40%;
  box-shadow: 5px 5px 5px #00000055;
  border-radius: 5px;
  object-fit: cover;
`;

export const IntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
  margin: auto;
`;

export const IntroductionTitle = styled.h1`
  text-align: center;
  margin: 1vh;
  font-family: "Satisfy", serif;
  font-size: 2rem;
`;

export const IntroductionContent = styled.p`
  width: 80%;
  margin: auto;
  line-height: 1.5;
`;
