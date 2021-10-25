import { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyle";
import MainContent from "./Containers/MainContent/MainContent";

import Navbar from "./Containers/Navbar/Navbar";
import Modal from "./Components/Modal/Modal";

function App() {
  const [scroll, setScroll] = useState(0);
  const [isModalOpen, setModal] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", trackScroll);
    return () => {
      window.removeEventListener("scroll", trackScroll);
    };
  }, []);

  const trackScroll = (e) => {
    setScroll(e.srcElement.scrollingElement.scrollTop);
  };

  const openModal = (e) => {
    console.log(e);
    setModal(isModalOpen ? false : true);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar scroll={scroll} />
      <MainContent openModal={openModal} />
      {isModalOpen ? <Modal openModal={openModal} /> : ""}
    </>
  );
}

export default App;
