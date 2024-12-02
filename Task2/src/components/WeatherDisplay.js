import React, { useContext, useMemo } from "react";
import { WeatherContext } from "../context/WeatherContext";

function WeatherDisplay() {
  const { weather } = useContext(WeatherContext);

  const displayData = useMemo(() => {
    return {
      city: weather.name,
      temperature: weather.main.temp,
      description: weather.weather[0].description,
    };
  }, [weather]);

  return (
    <div className="mt-3">
      <h5>Weather Details:</h5>
      <p>City: {displayData.city}</p>
      <p>Temperature: {displayData.temperature}°K</p>
      <p>Description: {displayData.description}</p>
    </div>
  );
}

export default WeatherDisplay;
