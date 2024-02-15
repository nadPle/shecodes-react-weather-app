import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>
        <span className="temperatureElement" id="tempElement">
          -2
        </span>
        <small className="unit">°C </small>
      </h1>

      <small className="humWindElement">
        <span className="humidityElement" id="humidityElement">
          Humidity: 84%
        </span>
        |
        <span className="windElement" id="windElement">
          Wind: 6 km/h
        </span>
      </small>

      <h2 id="weatherDescription">Few clouds</h2>

      <img
        className="weatherIllustration"
        id="weatherIllustration"
        src="images/few-clouds-day.png"
        alt="Weather illustration matching the current weather"
      />

      <h3 id="city">Solothurn</h3>
      <h4 id="entireCurrentDate">Monday | Feb 12 | 20:33</h4>
    </div>
  );
}
