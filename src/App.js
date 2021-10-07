import "./App.css";

import { useState } from "react";
import MainContent from "./Containers/MainContent";

function App() {
  const [width, setWidth] = useState(80);
  const [index, setIndex] = useState(1);

  const closeOpen = () => {
    setWidth(0);
    setTimeout(() => setWidth(80), 500);
  };

  const increment = () => {
    setTimeout(() => setIndex(index + 1), 500);
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
      <MainContent index={index} width={width} closeOpen={closeOpen} />
      <button onClick={increment}>count</button>
    </>
  );
}

export default App;
