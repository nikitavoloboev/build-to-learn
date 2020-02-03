import React, { useState } from "react";

const Counter = props => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
