import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="WeatherAppWrapper">
          <div className="WeatherAppDay" id="WeatherAppBox">
            <Weather cityDefault="Solothurn" />
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
