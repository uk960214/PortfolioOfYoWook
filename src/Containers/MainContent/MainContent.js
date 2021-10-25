import React from "react";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Projects from "../../Components/Projects/Projects";
import Cards from "../../Components/Cards/Cards";

import { Container } from "./MainContent.elements";
import CardGrid from "../CardGrid/CardGrid";

const MainContent = () => {
  return (
    <>
      <Container>
        {/* <Projects /> */}
        <CardGrid />
        <About />
        <Contact />
      </Container>
    </>
  );
};

export default MainContent;
