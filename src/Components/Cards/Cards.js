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

const Cards = () => {
  return (
    <div>
      <CardContainer url={sample}>
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
    </div>
  );
};

export default Cards;
