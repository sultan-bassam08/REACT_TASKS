import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="container my-3">
      <h4>Timer</h4>
      <p>Elapsed Time: {time} seconds</p>
    </div>
  );
}

export default Timer;
