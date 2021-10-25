import React from "react";
import { ContentDesc, ProjectContainer } from "./Projects.elements";
import {
  ContentImage,
  ContentStackWrapper,
  ContentStack,
} from "../../styles/globalStyle";

import github from "../../images/GithubLogo.png";
import sample from "../../images/img1.PNG";

const Projects = () => {
  return (
    <ProjectContainer>
      <ContentImage src={sample} alt="preview" />
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
