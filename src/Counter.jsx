import React, { useState } from "react";

function Counter() {
  
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <div>
        <button onClick={increment} style={{ margin: "5px" }}>Increment</button>
        <button onClick={decrement} style={{ margin: "5px" }}>Decrement</button>
        <button onClick={reset} style={{ margin: "5px" }}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;