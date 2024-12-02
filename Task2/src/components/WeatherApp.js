import React, { useState, useContext, useCallback } from "react";
import { WeatherContext } from "../context/WeatherContext";
import useWeatherData from "../hooks/useWeatherData";
import WeatherDisplay from "./WeatherDisplay";

function WeatherApp() {
  const { weather, setWeather } = useContext(WeatherContext);
  const [city, setCity] = useState("");
  const { data, error } = useWeatherData(city);

  const fetchWeather = useCallback(() => {
    if (data) setWeather(data);
  }, [data, setWeather]);

  return (
    <div className="container my-3">
      <h4>Weather App</h4>
      <input
        type="text"
        placeholder="Enter city"
        className="form-control mb-2"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn btn-primary" onClick={fetchWeather}>
        Get Weather
      </button>
      {error && (
        <p className="text-danger mt-2">
          Something went wrong. Please try again.
        </p>
      )}
      {weather && <WeatherDisplay />}
    </div>
  );
}

export default WeatherApp;
