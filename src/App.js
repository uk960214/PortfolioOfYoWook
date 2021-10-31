import { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyle";
import MainContent from "./Containers/MainContent/MainContent";

import Navbar from "./Containers/Navbar/Navbar";
import Modal from "./Components/Modal/Modal";

function App() {
  const [scroll, setScroll] = useState(0);
  const [isModalOpen, setModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

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
    setModal(isModalOpen ? false : true);
    if (e) {
      setModalIndex(e.target.dataset.index);
    }
  };

  return (
    <>
      <GlobalStyle isModalOpen={isModalOpen} />
      <Navbar scroll={scroll} />
      <MainContent openModal={openModal} />
      {isModalOpen ? (
        <Modal index={modalIndex} openModal={openModal} scroll={scroll} />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
