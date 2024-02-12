import React from "react";

import "./Forecast.css";

function Forecast() {
  return (
    <div className="Forecast">
      <div className="WeatherForecast" id="WeatherForecast">
        <div className="ColSM">
          <div className="ForecastDay"></div>
          <img
            className="ForecastIcon"
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${
          forecastDay.condition.icon
        }.png"
            alt=""
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

export default Forecast;
