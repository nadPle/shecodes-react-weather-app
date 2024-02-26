import React from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h1>
        <span className="temperatureElement" id="tempElement">
          {Math.round(props.celsius)}
        </span>
        <small className="unit">°C</small>
      </h1>
    </div>
  );
}
