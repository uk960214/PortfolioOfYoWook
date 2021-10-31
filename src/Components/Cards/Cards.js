import React, { useState } from "react";

import {
  CardContainer,
  CardImg,
  CardCaption,
  CardTopWrapper,
  CardTitle,
  CardStackWrapper,
  CardStackIcon,
  CardDate,
  ModalOpenButton,
  CardDesc,
} from "./Cards.elements";

import github from "../../images/GithubLogo.png";

import sample1 from "../../images/img1.PNG";
import sample2 from "../../images/img2.PNG";
import sample3 from "../../images/img3.PNG";
import sample4 from "../../images/img4.PNG";

import { SlideWrapper, SlideButton } from "../../styles/globalStyle";

const Cards = ({ openModal }) => {
  const imgs = [sample1, sample2, sample3, sample4];
  const [currImg, setImg] = useState(0);

  const changeImg = (direction) => {
    if (direction === "prev") {
      const change = currImg === 0 ? imgs.length - 1 : currImg - 1;
      setImg(change);
    } else {
      const change = currImg === imgs.length - 1 ? 0 : currImg + 1;
      setImg(change);
    }
  };

  return (
    <CardContainer url={imgs[currImg]}>
      <CardImg url={imgs[currImg]} />
      <CardCaption>
        <CardTopWrapper>
          <div>
            <CardTitle>Project Title</CardTitle>
            <CardStackWrapper>
              <CardStackIcon src={github} />
              <CardStackIcon src={github} />
              <CardStackIcon src={github} />
            </CardStackWrapper>
          </div>
          <div>
            <CardDate>September, 2021</CardDate>
            <ModalOpenButton onClick={openModal}>See Details</ModalOpenButton>
          </div>
        </CardTopWrapper>
        <CardDesc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          inventore eaque aperiam accusantium.
        </CardDesc>
      </CardCaption>
      <SlideWrapper>
        <SlideButton onClick={() => changeImg("prev")}>&lt;</SlideButton>
        <SlideButton onClick={() => changeImg("next")}>&gt;</SlideButton>
      </SlideWrapper>
    </CardContainer>
  );
};

export default Cards;
