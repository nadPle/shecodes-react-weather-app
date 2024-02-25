import React, { useState } from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";
import "./Forecast.css";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  function search() {
    const apiKey = "491037f95bt62c7eo1c6b568c53adb94";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <div className="forecast-grid-item">
          <ForecastInfo data={forecastData[0]} />
        </div>
      </div>
    );
  } else {
    search();

    return null;
  }
}
