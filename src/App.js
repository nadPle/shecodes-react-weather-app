import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="WeatherAppWrapper">
          <div className="WeatherAppDay" id="WeatherAppBox">
            <Search />
            <Weather />
            <Forecast />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
