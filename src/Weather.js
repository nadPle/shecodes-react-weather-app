import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      date: "Monday | Feb 12 | 20:33",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>
          <span className="temperatureElement" id="tempElement">
            {Math.round(weatherData.temperature)}
          </span>
          <small className="unit">°C </small>
        </h1>

        <small className="humWindElement">
          <span className="humidityElement" id="humidityElement">
            Humidity: {weatherData.humidity}%
          </span>
          |
          <span className="windElement" id="windElement">
            Wind: {Math.round(weatherData.wind)} km/h
          </span>
        </small>

        <h2 id="weatherDescription">{weatherData.description}</h2>

        <img
          className="weatherIllustration"
          id="weatherIllustration"
          src={`images/${weatherData.icon}.png`}
          alt="Weather illustration matching the current weather"
        />

        <h3 id="city">{weatherData.city}</h3>
        <h4 id="entireCurrentDate">{weatherData.date}</h4>
      </div>
    );
  } else {
    const apiKey = "491037f95bt62c7eo1c6b568c53adb94";
    let city = props.cityDefault;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <p>Loading weather data...</p>;
  }
}
