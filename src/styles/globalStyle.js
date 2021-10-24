import { createGlobalStyle } from "styled-components";
import background1 from "../images/background1.jpg";
import background2 from "../images/background2.jpg";
import background3 from "../images/background3.jpg";
import background4 from "../images/background4.jpg";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  scroll-padding-top: 15vh;
}

body {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${background4}) center center/cover;
  background-attachment: fixed;
  font-family: "Raleway", sans-serif;
}
`;

export default GlobalStyle;

export const ContentImage = styled.img`
  width: 70%;
  margin: 3vh 15% 5vh 15%;
  box-shadow: 1px 1px 4px 4px #00000033;
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

export const ContentWrapper = styled.div``;
