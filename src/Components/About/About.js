import React from "react";
import profileImg from "../../images/Profile.jpg";
import { SectionTitle } from "../../styles/globalStyle";

import {
  AboutContainer,
  AboutSection,
  Profile,
  IntroductionWrapper,
  IntroductionTitle,
  IntroductionContent,
} from "./About.elements";

const About = () => {
  return (
    <AboutSection>
      <SectionTitle>About Me</SectionTitle>
      <AboutContainer id="about">
        <Profile src={profileImg} alt="profile" />
        <IntroductionWrapper>
          <IntroductionTitle>Yo Wook Kim</IntroductionTitle>
          <IntroductionContent>
            I am a Frontend Developer located in Seoul, Republic of Korea. My
            goal is to develop apps and services that is inclusive to digitally
            marginalized people and bridge the gap between digital natives and
            the digitally marginalized.
          </IntroductionContent>
          <IntroductionTitle>Curious</IntroductionTitle>
          <IntroductionContent>
            As a developer, my strong point is that I have infinite curiosity,
            in everyday life and in technology. I am always interested in
            hearing news and dig deeper into what catches my attention the most.
            This helps me to keep an interest in the world around me, and look
            for problems that might be solved with programming. Also I am also
            very curious with new technology and techniques that is introduced
            to the world of programming. With this curiosity I can stay alert
            and adapt to the ever-changing environments of technology.
          </IntroductionContent>
          <IntroductionTitle>Ambitious</IntroductionTitle>
          <IntroductionContent>
            When it comes to programming, I am ambitious. Like I mentioned
            above, I have huge interest in solving the real world problems with
            programming. I am always up for challenges that come my way, in the
            journey of reaching the solution I dream of and plan for.
          </IntroductionContent>
        </IntroductionWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
