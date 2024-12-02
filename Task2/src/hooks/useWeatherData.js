import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "9687d5fcbc2fa91fa6e5dbf80bafdfc9";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const useWeatherData = (city) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false); // Changed to a boolean flag

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      setError(false); // Reset error before fetching
      try {
        const response = await axios.get(BASE_URL, {
          params: { q: city, appid: API_KEY },
        });
        setData(response.data);
      } catch (err) {
        setError(true); // Set error flag
      }
    };

    fetchData();
  }, [city]);

  return { data, error };
};

export default useWeatherData;
