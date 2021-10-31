import React, { useState } from "react";
import {
  ContentDesc,
  ContentTitle,
  ProjectContainer,
  ContentImage,
  ContentImageWrapper,
  ContentStackWrapper,
  ContentStack,
} from "./Projects.elements";

import { SlideButton, SlideWrapper } from "../../styles/globalStyle";
import { sampleData } from "../../data/data";

const Projects = ({ dataIndex }) => {
  const data = sampleData[dataIndex];
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
    <ProjectContainer>
      <ContentTitle>{data.title}</ContentTitle>
      <ContentImageWrapper>
        <ContentImage src={data.imgs[currImg]} alt="preview" />
        <SlideWrapper>
          <SlideButton onClick={() => changeImg("prev")}>&lt;</SlideButton>
          <SlideButton onClick={() => changeImg("next")}>&gt;</SlideButton>
        </SlideWrapper>
      </ContentImageWrapper>

      <ContentStackWrapper>
        {data.stacks.map((x) => {
          return <ContentStack src={x} />;
        })}
      </ContentStackWrapper>

      <ContentDesc>{data.long}</ContentDesc>
    </ProjectContainer>
  );
};

export default Projects;
