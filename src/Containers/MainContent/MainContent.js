import React from "react";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Projects from "../../Components/Projects/Projects";

import { Container } from "./MainContent.elements";
import CardGrid from "../CardGrid/CardGrid";

const MainContent = ({ openModal }) => {
  return (
    <>
      <Container>
        {/* <Projects /> */}
        <CardGrid openModal={openModal} />
        <About />
        <Contact />
      </Container>
    </>
  );
};

export default MainContent;
