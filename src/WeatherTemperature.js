import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1>
          <span className="temperatureElement" id="tempElement">
            {Math.round(props.celsius)}{" "}
          </span>
          <small className="unit">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </small>
        </h1>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <h1>
          <span className="temperatureElement" id="tempElement">
            {Math.round(fahrenheit)}{" "}
          </span>
          <small className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </small>
        </h1>
      </div>
    );
  }
}
