import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";

import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (weekforecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={weekforecast} />
                </div>
              );
            }
          })}
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
