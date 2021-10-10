import React from "react";
import profileImg from "../../images/Profile.jpg";

import {
  AboutContainer,
  Profile,
  IntroductionWrapper,
  IntroductionTitle,
  IntroductionContent,
} from "./About.elements";

const About = () => {
  return (
    <AboutContainer>
      <Profile src={profileImg} alt="profile" />
      <IntroductionWrapper>
        <IntroductionTitle>Curious, Ambitious, Passionate</IntroductionTitle>
        <IntroductionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos tempora
          officiis voluptatum nesciunt voluptas tenetur obcaecati quaerat
          adipisci ea delectus eaque sequi illo laboriosam aperiam, debitis
          ipsam suscipit, facilis, porro quod natus sunt repellat perspiciatis
          quisquam laudantium? Maxime, deleniti repellendus numquam pariatur
          optio repudiandae consequuntur, harum cumque exercitationem facilis
          nostrum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Maiores cumque esse blanditiis nulla voluptatum architecto excepturi.
          Earum voluptates architecto vero fugit itaque exercitationem ipsam
          sit. Nemo repellendus quasi, modi libero asperiores quis molestias
          odio nulla praesentium fugiat. Omnis unde magni eligendi, cumque illum
          voluptatum fuga. Aliquid temporibus similique facere inventore?
        </IntroductionContent>
      </IntroductionWrapper>
    </AboutContainer>
  );
};

export default About;
