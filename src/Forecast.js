import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="WeatherForecast" id="WeatherForecast">
        <div className="ColSM">
          <div className="ForecastDay"></div>
          <img
            className="ForecastIcon"
            src=""
            alt="Forecast icon matching current weather"
          />
          <div className="ForecastTemp">
            <span className="ForecastTempHigh" id="ForecastTempHigh">
              °
            </span>{" "}
            |
            <span className="ForecastTempLow" id="ForecastTempLow">
              °
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
