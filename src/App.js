import "./App.css";
import { Container } from "./App.elements";

import { useState } from "react";
import sample from "./img1.PNG";

function App() {
  const [width, setWidth] = useState(80);
  const closeOpen = () => {
    setWidth(width === 80 ? 0 : 80);
  };
  return (
    <>
      <h1>Portfolio of Yo Wook Kim</h1>
      <nav>
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Tech Profile</li>
          <li>Contact</li>
        </ul>
      </nav>
      <Container w={width}>
        <div>
          <img src={sample} alt="preview" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
            illum. Et voluptatum suscipit quod. Impedit debitis culpa sed
            cupiditate nesciunt temporibus sequi laudantium neque quia
            distinctio, et aspernatur illum? Esse.
          </p>
        </div>
      </Container>
      <button onClick={closeOpen}>close</button>
    </>
  );
}

export default App;
