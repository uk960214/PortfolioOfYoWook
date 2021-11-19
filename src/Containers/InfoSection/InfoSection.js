import React from "react";
import {
  InfoContainer,
  SocialLinksWrapper,
  SocialLink,
  ResumeButton,
} from "./InfoSection.elements";

import github from "../../images/stacks/GithubLogo.png";
import linkedIn from "../../images/LiLogo.png";
import resume from "../../data/Yo Wook Kim(CV - English).pdf";

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <SocialLinksWrapper>
          <SocialLink href="https://github.com/uk960214" target="_blank">
            <img src={github} alt="github" />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/yo-wook-kim-0890481a2/"
            target="_blank"
          >
            <img src={linkedIn} alt="linkedIn" />
          </SocialLink>
          <SocialLink href="https://uk960214.github.io/" target="_blank">
            Blog
          </SocialLink>
        </SocialLinksWrapper>
        <ResumeButton href={resume} download>
          Download CV
        </ResumeButton>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
