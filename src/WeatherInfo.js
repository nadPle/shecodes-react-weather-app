import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <span className="temperatureElement" id="tempElement">
          {Math.round(props.data.temperature)}
        </span>
        <small className="unit">°C </small>
      </h1>

      <small className="humWindElement">
        <span className="humidityElement" id="humidityElement">
          Humidity: {props.data.humidity}%
        </span>
        |
        <span className="windElement" id="windElement">
          Wind: {Math.round(props.data.wind)} km/h
        </span>
      </small>

      <h2 id="weatherDescription">{props.data.description}</h2>

      <img
        className="weatherIllustration"
        id="weatherIllustration"
        src={`images/${props.data.icon}.png`}
        alt="Weather illustration matching the current weather"
      />

      <h3 id="city">{props.data.city}</h3>
      <h4 id="entireCurrentDate">
        <FormattedDate date={props.data.date} />{" "}
      </h4>
    </div>
  );
}
