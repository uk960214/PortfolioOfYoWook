import React from "react";
import {
  InfoContainer,
  SocialLinksWrapper,
  SocialLink,
  ResumeButton,
} from "./InfoSection.elements";

import github from "../../images/stacks/GithubLogo.png";
import linkedIn from "../../images/LiLogo.png";

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
        </SocialLinksWrapper>
        {/* <ResumeButton>Download Resume</ResumeButton> */}
      </InfoContainer>
    </>
  );
};

export default InfoSection;
