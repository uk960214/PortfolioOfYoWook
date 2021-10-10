import React from "react";
import Projects from "../../Components/Projects/Projects";
import TechProfile from "../TechProfile/TechProfile";
import background2 from "../../images/background2.jpg";

import { Container, ContentSection, MaskImg } from "./MainContent.elements";

const MainContent = ({ width, closeOpen }) => {
  return (
    <>
      <Container w={width}>
        <ContentSection>
          {/* <Projects closeOpen={closeOpen} /> */}
          <TechProfile closeOpen={closeOpen} />
        </ContentSection>
      </Container>
    </>
  );
};

export default MainContent;
