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
  scroll-padding-top: 18vh;
}

body {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${background4}) center center/cover;
  background-attachment: fixed;
  font-family: "Raleway", sans-serif;
  overflow-y: ${(props) => (props.isModalOpen ? "hidden" : "")};

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
}
`;

export default GlobalStyle;

export const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 5vh;
`;
