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

import github from "../../images/GithubLogo.png";

import sample1 from "../../images/img1.PNG";
import sample2 from "../../images/img2.PNG";
import sample3 from "../../images/img3.PNG";
import sample4 from "../../images/img4.PNG";

import { SlideButton, SlideWrapper } from "../../styles/globalStyle";

const Projects = () => {
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
    <ProjectContainer>
      <ContentTitle>Project Title</ContentTitle>
      <ContentImageWrapper>
        <ContentImage src={imgs[currImg]} alt="preview" />
        <SlideWrapper>
          <SlideButton onClick={() => changeImg("prev")}>&lt;</SlideButton>
          <SlideButton onClick={() => changeImg("next")}>&gt;</SlideButton>
        </SlideWrapper>
      </ContentImageWrapper>

      <ContentStackWrapper>
        <ContentStack src={github} />
        <ContentStack src={github} />
        <ContentStack src={github} />
      </ContentStackWrapper>

      <ContentDesc>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
        illum. Et voluptatum suscipit quod. Impedit debitis culpa sed cupiditate
        nesciunt temporibus sequi laudantium neque quia distinctio, et
        aspernatur illum? Esse. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Aliquid, dolor?
      </ContentDesc>
    </ProjectContainer>
  );
};

export default Projects;
