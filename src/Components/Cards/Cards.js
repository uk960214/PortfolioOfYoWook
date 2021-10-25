import React from "react";

import {
  CardContainer,
  CardCaption,
  CardTopWrapper,
  CardTitle,
  CardStackWrapper,
  CardStackIcon,
  CardDate,
  CardDesc,
} from "./Cards.elements";

import github from "../../images/GithubLogo.png";

import sample from "../../images/img1.PNG";

const Cards = ({ openModal }) => {
  console.log(openModal);
  return (
    <CardContainer url={sample} onClick={openModal}>
      <CardCaption>
        <CardTopWrapper>
          <CardTitle>Project Title</CardTitle>
          <CardStackWrapper>
            <CardStackIcon src={github} />
            <CardStackIcon src={github} />
            <CardStackIcon src={github} />
          </CardStackWrapper>
          <CardDate>September, 2021</CardDate>
        </CardTopWrapper>
        <CardDesc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          inventore eaque aperiam accusantium.
        </CardDesc>
      </CardCaption>
    </CardContainer>
  );
};

export default Cards;
