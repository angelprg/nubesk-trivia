import React, { useState } from "react";
import "./App.sass";
import { Trivia, Start } from "./components";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className={"app m-0 my-md-5 mx-auto "}>
      {start ? <Trivia /> : <Start handleStart={() => setStart(true)} />}
    </div>
  );
}

export default App;
