import React from "react";
import {
  InfoContainer,
  SocialLinksWrapper,
  SocialLink,
  ResumeButton,
} from "./InfoSection.elements";

import github from "../../images/GithubLogo.png";
import linkedIn from "../../images/LiLogo.png";
import instagram from "../../images/InstaLogo.png";

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
          <SocialLink
            href="https://www.instagram.com/valenti700/"
            target="_blank"
          >
            <img src={instagram} alt="instagram" />
          </SocialLink>
        </SocialLinksWrapper>
        <ResumeButton>Download Resume</ResumeButton>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
