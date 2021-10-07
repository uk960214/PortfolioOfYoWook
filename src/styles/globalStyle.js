import { createGlobalStyle } from "styled-components";
import background from "../image1.jpg";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500&family=Satisfy&display=swap');
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${background}) center center/cover;
  
}
`;

export default GlobalStyle;
