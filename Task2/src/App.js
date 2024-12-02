import React from "react";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import WeatherApp from "./components/WeatherApp";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="container">
        <h2 className="my-4">React Hooks Demo</h2>
        <Counter />
        <Timer />
        <WeatherApp />
      </div>
    </WeatherProvider>
  );
}

export default App;
