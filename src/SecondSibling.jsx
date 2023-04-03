import React, { useEffect, useState } from "react";

const SecondSibling = (props) => {
  const [counter, setCounter] = useState(0);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (render) {
      if (props.counter % 5 === 0) {
        setCounter(counter + 1);
      }
    }
    setRender(true);
  }, [props.counter]);

  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
};

export default SecondSibling;
