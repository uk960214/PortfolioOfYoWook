import React from "react";
import Cards from "../../Components/Cards/Cards";
import { GridContainer, CardGridSection } from "./CardGrid.element";
import { SectionTitle } from "../../styles/globalStyle";

import { sampleData } from "../../data/data";

const CardGrid = ({ openModal }) => {
  const CardList = Object.keys(sampleData).map((i) => {
    return <Cards openModal={openModal} data={sampleData[i]} dataIndex={i} />;
  });

  return (
    <CardGridSection>
      <SectionTitle>Projects</SectionTitle>
      <GridContainer id="projects">{CardList}</GridContainer>
    </CardGridSection>
  );
};

export default CardGrid;
