import React, { useState } from 'react';
import axios from 'axios';

const WeatherApi = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'adfda6a2845f8867e5b24016bb1abc02';

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      setError(null);
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found');
      setWeatherData(null);
    }
  };

  return (
    <div className="container weather-api m-4 py-4">
      <h2>Weather API</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={fetchWeatherData}>Check Weather</button>
      {weatherData && (
        <div className="weather-data">
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default WeatherApi;
