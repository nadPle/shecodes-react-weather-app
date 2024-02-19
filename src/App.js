import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="WeatherAppWrapper">
          <div className="WeatherAppDay" id="WeatherAppBox">
            <Search />
            <Weather cityDefault="Solothurn" />
            <Forecast />
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
