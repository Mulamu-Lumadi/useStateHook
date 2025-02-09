import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const numerate = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  // const [black, yellow, blue] = [12, 100, 30];
  // console.log(blue); 30
  // console.log(black); 12
  // console.log(yellow); 100
  // Destructing arrays example
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={minus}>-</button>
      <button onClick={numerate}>+</button>
    </div>
  );
}

export default App;
