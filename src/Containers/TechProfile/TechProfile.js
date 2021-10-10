import React, { useEffect } from "react";
import github from "../../images/GithubLogo.png";
import sample from "../../images/img1.PNG";
import {
  ContentWrapper,
  ContentImage,
  ContentStackWrapper,
  ContentStack,
} from "../../styles/globalStyle";

import { FlexContainer } from "./TechProfile.elements";

const TechProfile = ({ closeOpen }) => {
  useEffect(() => {
    closeOpen();
  }, []);

  return (
    <>
      <FlexContainer>
        <ContentWrapper>
          <ContentImage src={sample} alt="preview" />
          <ContentStackWrapper>
            <ContentStack src={github} />
            <ContentStack src={github} />
            <ContentStack src={github} />
          </ContentStackWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <ContentImage src={sample} alt="preview" />
          <ContentStackWrapper>
            <ContentStack src={github} />
            <ContentStack src={github} />
            <ContentStack src={github} />
          </ContentStackWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <ContentImage src={sample} alt="preview" />
          <ContentStackWrapper>
            <ContentStack src={github} />
            <ContentStack src={github} />
            <ContentStack src={github} />
          </ContentStackWrapper>
        </ContentWrapper>
      </FlexContainer>
    </>
  );
};

export default TechProfile;
