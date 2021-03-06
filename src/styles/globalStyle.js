import { createGlobalStyle } from "styled-components";
import background from "../images/background.jpg";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  scroll-padding-top: 20vh;
}

body {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${background}) center center/cover;
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
  font-size: 2.5rem;
  margin-bottom: 5vh;
  text-shadow: 3px 3px 1px #00000033;
`;

export const SlideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 45%;
  padding: 0 1vw;
`;

export const SlideButton = styled.div`
  background-color: #eeeeee;
  border: 1px #ccccccbb solid;
  border-radius: 50%;
  width: 2.5vw;
  height: 2.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 0;
  cursor: pointer;
`;
