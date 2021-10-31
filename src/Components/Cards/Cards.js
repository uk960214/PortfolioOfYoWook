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
import Modal from "../Modal/Modal";

const Cards = ({ openModal, data, dataIndex }) => {
  const [currImg, setImg] = useState(0);

  const changeImg = (direction) => {
    if (direction === "prev") {
      const change = currImg === 0 ? data.imgs.length - 1 : currImg - 1;
      setImg(change);
    } else {
      const change = currImg === data.imgs.length - 1 ? 0 : currImg + 1;
      setImg(change);
    }
  };

  return (
    <CardContainer>
      <CardImg url={data.imgs[currImg]} />
      <CardCaption>
        <CardTopWrapper>
          <div>
            <CardTitle>{data.title}</CardTitle>
            <CardStackWrapper>
              {data.stacks.map((x) => {
                return <CardStackIcon src={x} />;
              })}
            </CardStackWrapper>
          </div>
          <div>
            <CardDate>{data.date}</CardDate>
            <ModalOpenButton data-index={dataIndex} onClick={openModal}>
              See Details
            </ModalOpenButton>
          </div>
        </CardTopWrapper>
        <CardDesc>{data.short}</CardDesc>
      </CardCaption>
      <SlideWrapper>
        <SlideButton onClick={() => changeImg("prev")}>&lt;</SlideButton>
        <SlideButton onClick={() => changeImg("next")}>&gt;</SlideButton>
      </SlideWrapper>
    </CardContainer>
  );
};

export default Cards;
