import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ margin: "5px" }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: "5px" }}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
