import "./App.css";
import { Container } from "./App.elements";

import { useState } from "react";

function App() {
  const [width, setWidth] = useState(80);
  const closeOpen = () => {
    setWidth(width === 80 ? 0 : 80);
  };
  return (
    <>
      <Container w={width}>
        <p>me</p>
      </Container>
      <button onClick={closeOpen}>close</button>
    </>
  );
}

export default App;
