import React, { useState } from "react";
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
      <div className="weatherAppWrapper">
        <div className={`weatherApp${background}`} id="weatherAppBox">
          <Weather cityDefault="London" onTimeUpdate={handleTimeUpdate} />

          <div className="footer">
            <p className="footnote">
              <a
                className="openSourceLink"
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
  );
}
