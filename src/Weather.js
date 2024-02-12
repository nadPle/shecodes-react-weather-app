import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>
        <span className="TemperatureElement" id="TempElement">
          -2
        </span>
        <small className="Unit">°C </small>
      </h1>

      <small className="HumWindElement">
        <span className="HumidityElement" id="HumidityElement">
          Humidity: 84%
        </span>
        |
        <span className="WindElement" id="WindElement">
          Wind: 6 km/h
        </span>
      </small>

      <h2 id="WeatherDescription">Few clouds</h2>

      <img
        className="WeatherIllustration"
        id="WeatherIllustration"
        src="images/few-clouds-day.png"
      />

      <h3 id="City">Solothurn</h3>
      <h4 id="EntireCurrentDate">Monday | Feb 12 | 20:33</h4>
    </div>
  );
}
