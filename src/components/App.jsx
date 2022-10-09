import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time || "TIME"}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
