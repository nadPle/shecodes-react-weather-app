import React from "react";

export default function BackgroundChange(props) {
  let time = 8;

  if (time >= 7 && time < 20) {
    return "WeatherAppDay";
  } else {
    return "WeatherAppNight";
  }
}
