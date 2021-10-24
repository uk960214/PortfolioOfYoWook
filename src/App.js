import { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyle";
import MainContent from "./Containers/MainContent/MainContent";

import Navbar from "./Containers/Navbar/Navbar";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", trackScroll);
    return () => {
      window.removeEventListener("scroll", trackScroll);
    };
  }, []);

  const trackScroll = (e) => {
    setScroll(e.srcElement.scrollingElement.scrollTop);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar scroll={scroll} />
      <MainContent />
    </>
  );
}

export default App;
