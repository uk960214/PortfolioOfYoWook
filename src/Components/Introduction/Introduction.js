import React from "react";

import {
  IntroductionContent,
  IntroductionSection,
} from "./Introduction.elements";

const Introduction = () => {
  return (
    <IntroductionSection>
      <IntroductionContent>
        Welcome! <br />
        This is the history of Yo Wook, the frontend developer
      </IntroductionContent>
    </IntroductionSection>
  );
};

export default Introduction;
