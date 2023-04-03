import React, { useState, useEffect } from "react";
import SecondSibling from "./SecondSibling";
import FirstSibling from "./FirstSibling";

function App() {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(null);

  let timeout;
  useEffect(() => {
    timeout = setTimeout(() => {
      if (start) {
        startTimeout();
      }
    }, 1000);
    setStop(timeout);
  }, [counter, start]);

  const startTimeout = () => {
    setCounter(counter + 1);
  };

  const checkStart = () => {
    setStart(true);
  };

  function handleStopTimeout() {
    clearTimeout(stop);
    setStop(null);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={checkStart}>start counter</button>
      <FirstSibling stop={handleStopTimeout}></FirstSibling>
      <SecondSibling counter={counter}></SecondSibling>
    </div>
  );
}

export default App;
