import { createGlobalStyle } from "styled-components";
import background from "../images/image1.jpg";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${background}) center center/cover;
  
}
`;

export default GlobalStyle;
