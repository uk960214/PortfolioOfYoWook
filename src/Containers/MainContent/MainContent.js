import React, { useEffect } from "react";
import sample from "../../img1.PNG";
import {
  Container,
  ContentDesc,
  ContentImage,
  ContentStackWrapper,
  ContentStack,
  ContentWrapper,
} from "./MainContent.elements";

import github from "./GitHub-Mark.png";

const MainContent = ({ width, closeOpen, index }) => {
  useEffect(() => {
    closeOpen();
  }, [index]);

  return (
    <Container w={width}>
      <ContentWrapper>
        <ContentImage src={sample} alt="preview" />
        <ContentStackWrapper>
          <ContentStack src={github} />
          <ContentStack src={github} />
          <ContentStack src={github} />
        </ContentStackWrapper>
        <ContentDesc>
          {index} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Officiis, illum. Et voluptatum suscipit quod. Impedit debitis culpa
          sed cupiditate nesciunt temporibus sequi laudantium neque quia
          distinctio, et aspernatur illum? Esse.
        </ContentDesc>
      </ContentWrapper>
    </Container>
  );
};

export default MainContent;