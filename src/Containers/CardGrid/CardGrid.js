import React from "react";
import Cards from "../../Components/Cards/Cards";
import { GridContainer } from "./CardGrid.element";

const CardGrid = ({ openModal }) => {
  return (
    <GridContainer id="projects">
      <Cards openModal={openModal} />
      <Cards openModal={openModal} />
      <Cards openModal={openModal} />
      <Cards openModal={openModal} />
      <Cards openModal={openModal} />
      <Cards openModal={openModal} />
    </GridContainer>
  );
};

export default CardGrid;
