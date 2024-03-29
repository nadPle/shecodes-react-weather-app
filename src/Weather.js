import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.cityDefault);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });

    props.onTimeUpdate(new Date(response.data.time * 1000));
  }

  function search() {
    const apiKey = "491037f95bt62c7eo1c6b568c53adb94";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="flex">
          <form id="enterCityForm" onSubmit={handleSubmit}>
            <div className="search-bar">
              <input
                className="search-input"
                type="text"
                placeholder="Enter a city"
                id="enteredCity"
                autoComplete="off"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                value="search"
                className="search-icon material-symbols-outlined"
              />{" "}
            </div>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();

    return (
      <div className="LoadingData">
        <p>Loading weather data...</p>
      </div>
    );
  }
}
