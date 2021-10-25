import React from "react";
import Cards from "../../Components/Cards/Cards";
import { GridContainer } from "./CardGrid.element";

const CardGrid = () => {
  return (
    <GridContainer>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </GridContainer>
  );
};

export default CardGrid;
