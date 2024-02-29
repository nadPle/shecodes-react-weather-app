import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  const [background, setBackground] = useState("Day");

  function handleTimeUpdate(fetchedDate) {
    const currentTime = fetchedDate.getHours();

    if (currentTime >= 7 && currentTime < 20) {
      setBackground("Day");
    } else {
      setBackground("Night");
    }
  }

  return (
    <div className="App">
      <div className="Container">
        <div className="WeatherAppWrapper">
          <div className={`WeatherApp${background}`} id="WeatherAppBox">
            <Weather cityDefault="London" onTimeUpdate={handleTimeUpdate} />

            <div className="Footer">
              <p className="Footnote">
                <a
                  className="OpenSourceLink"
                  href="https://github.com/nadPle/shecodes-react-weather-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open-source code
                </a>{" "}
                by Nadine Plepel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
