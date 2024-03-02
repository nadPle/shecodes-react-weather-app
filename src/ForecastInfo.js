import React from "react";

import "./ForecastInfo.css";

export default function ForecastInfo(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function showDay() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  return (
    <div className="ForecastInfo">
      <div className="forecastDay">{showDay()}</div>
      <div>
        <img
          src={`${props.data.condition.icon_url}`}
          alt={`${props.data.condition.description}`}
        />
      </div>
      <div className="forecastTemp">
        <span className="forecastTempHigh" id="forecastTempHigh">
          {maxTemperature()}
        </span>{" "}
        |{" "}
        <span className="forecastTempLow" id="forecastTempLow">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
