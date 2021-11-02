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
  DemoLink,
  CardDesc,
  ButtonWrapper,
  LeftWrapper,
} from "./Cards.elements";

import { SlideWrapper, SlideButton } from "../../styles/globalStyle";

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
          <LeftWrapper>
            <CardTitle>{data.title}</CardTitle>
            <CardStackWrapper>
              {data.stacks.map((x) => {
                return <CardStackIcon src={x} />;
              })}
            </CardStackWrapper>
          </LeftWrapper>
          <div>
            <CardDate>{data.date}</CardDate>
            <ButtonWrapper>
              <ModalOpenButton data-index={dataIndex} onClick={openModal}>
                See Details
              </ModalOpenButton>
              <DemoLink href={data.demo} target="_blank">
                To Demo
              </DemoLink>
            </ButtonWrapper>
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
