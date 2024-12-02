import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container my-3">
      <h4>Counter</h4>
      <button
        className="btn btn-primary me-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button className="btn btn-secondary" onClick={() => setCount(0)}>
        Reset
      </button>
      <p className="mt-2">Current Count: {count}</p>
    </div>
  );
}

export default Counter;
