import React from "react";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Projects from "../../Components/Projects/Projects";
import TechProfile from "../../Components/TechProfile/TechProfile";

import { Container, ContentSection, MaskImg } from "./MainContent.elements";

const MainContent = ({ width, closeOpen }) => {
  return (
    <>
      <Container w={width}>
        <ContentSection>
          <Projects closeOpen={closeOpen} />
          <TechProfile closeOpen={closeOpen} />
          <Contact />
          <About />
        </ContentSection>
      </Container>
    </>
  );
};

export default MainContent;
