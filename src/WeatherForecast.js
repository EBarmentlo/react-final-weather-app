import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setloaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="ForecastDay">{forecast[0].dt * 1000}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} />
            <div className="ForecastTemperature">
              <span className="ForecastTemperature-Max">
                {forecast[0].temp.max}° |{" "}
              </span>
              <span className="ForecastTemperature-Min">
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "337c2cd71ceaf873b598596eeb4eda3a";
    let longitude = props.data.coordinates.lon;
    let latitude = props.data.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
