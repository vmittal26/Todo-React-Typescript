import React, { useState, useEffect } from "react";
import {Position } from './model/IPosition';
const App = () => {

  const [count, setCount] = useState<number>(0);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  let i = 0;
  useEffect(
    () => {
      document.title = `You have clicked  ${count} times`;
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        // console.log("cleaning up...",i++);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    [count]
  );

  const handleMouseMove = (event: MouseEvent): void => {
    // console.log("onMouseMove",i++);
    setPosition({ x: event.pageX, y: event.pageY });
  };
  return (
    <div className="App">
      <div>count : {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>
        Mouse position is
        <strong>
          {JSON.stringify(position,null,2)}
        </strong>
      </p>
    </div>
  );
};

export default App;
