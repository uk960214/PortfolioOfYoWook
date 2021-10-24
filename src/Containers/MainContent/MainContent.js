import React from "react";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Projects from "../../Components/Projects/Projects";

import { Container } from "./MainContent.elements";

const MainContent = () => {
  return (
    <>
      <Container>
        <Projects />
        <About />
        <Contact />
      </Container>
    </>
  );
};

export default MainContent;
