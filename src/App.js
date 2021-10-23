import { useState } from "react";
import GlobalStyle from "./styles/globalStyle";
import MainContent from "./Containers/MainContent/MainContent";

import Navbar from "./Containers/Navbar/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainContent />
    </>
  );
}

export default App;
