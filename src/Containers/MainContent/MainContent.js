import React from "react";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";

import { Container } from "./MainContent.elements";
import CardGrid from "../CardGrid/CardGrid";
import Introduction from "../../Components/Introduction/Introduction";

const MainContent = ({ openModal }) => {
  return (
    <>
      <Container>
        <Introduction />
        <CardGrid openModal={openModal} />
        <About />
        {/* <Contact /> */}
      </Container>
    </>
  );
};

export default MainContent;
