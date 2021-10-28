import React from "react";
import Cards from "../../Components/Cards/Cards";
import { GridContainer, CardGridSection } from "./CardGrid.element";
import { SectionTitle } from "../../styles/globalStyle";

const CardGrid = ({ openModal }) => {
  return (
    <CardGridSection>
      <SectionTitle>Projects</SectionTitle>
      <GridContainer id="projects">
        <Cards openModal={openModal} />
        <Cards openModal={openModal} />
        <Cards openModal={openModal} />
        <Cards openModal={openModal} />
        <Cards openModal={openModal} />
        <Cards openModal={openModal} />
      </GridContainer>
    </CardGridSection>
  );
};

export default CardGrid;
