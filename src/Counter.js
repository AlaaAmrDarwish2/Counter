import React, { useState } from "react";
import './App.css';

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const restart = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCount(prev => prev * -1);
  };

  return (
    <div className="container">
      <h1 className="count">Count: <span data-testid="count">{count}</span></h1>
      <div className="btn-container">
        <button onClick={increment} className="btn">Increment</button>
        <button onClick={decrement} className="btn">Decrement</button>
        <button onClick={restart} className="btn">Restart</button>
        <button onClick={switchSigns} className="btn">Switch Signs</button>
      </div>
    </div>
  );
}

export default Counter;
