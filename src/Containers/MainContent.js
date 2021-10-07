import React, { useEffect } from "react";
import sample from "../img1.PNG";
import { Container } from "./MainContent.elements";

const MainContent = ({ width, closeOpen, index }) => {
  useEffect(() => {
    closeOpen();
  }, [index]);

  return (
    <Container w={width}>
      <img src={sample} alt="preview" />

      <p>
        {index} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Officiis, illum. Et voluptatum suscipit quod. Impedit debitis culpa sed
        cupiditate nesciunt temporibus sequi laudantium neque quia distinctio,
        et aspernatur illum? Esse.
      </p>
    </Container>
  );
};

export default MainContent;
