import { useState } from "react";
import GlobalStyle from "./styles/globalStyle";
import MainContent from "./Containers/MainContent/MainContent";
import { Title } from "./App.elements";
import Navbar from "./Containers/Navbar/Navbar";
import InfoSection from "./Containers/InfoSection/InfoSection";

function App() {
  const [width, setWidth] = useState(80);
  const [index, setIndex] = useState(1);

  const closeOpen = () => {
    setWidth(0);
    setTimeout(() => setWidth(80), 500);
  };

  const increment = () => {
    setTimeout(() => setIndex(index + 1), 500);
  };

  return (
    <>
      <GlobalStyle />
      <Title>Portfolio of Yo Wook Kim</Title>
      <InfoSection />
      <Navbar />
      <MainContent index={index} width={width} closeOpen={closeOpen} />
    </>
  );
}

export default App;
