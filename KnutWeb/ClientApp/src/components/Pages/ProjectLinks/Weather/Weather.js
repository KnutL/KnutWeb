import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const WeatherWrapper = styled("div")`
  background-color: rgba(0, 0, 0, 0.6);
  width: 300px;
  margin: 0 auto;
`;

export const Weather = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Göteborg");

  useEffect(() => getWeather(), []);

  const d = new Date();
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const today = weekday[d.getDay()];

  function getWeather() {
    let appId = "582b390fa2ea3979397866c4cb727a22";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`;

    axios.get(url).then((res) => {
      let data = res.data;
      console.warn(data);
      setWeather(data);
    });
  }

  function getCelsius(k) {
    let c = k - 273.15;
    return Math.round(c * 10) / 10;
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="wrapper">
      {weather && (
        <div>
          <div className="">
            <input
              type="text"
              placeholder="Enter channel name"
              value={city}
              className="form-control col-md-4 mx-auto"
              onChange={changeCity}
            />
            <input
              type="button"
              value="Search"
              className="btn btn-dark m-2"
              onClick={getWeather}
            />
          </div>

          <WeatherWrapper>
            <p>Weather in {weather.name}</p>
            <h2>
              {today} <FontAwesomeIcon icon={faCloud} />{" "}
              {weather.weather[0].main} {getCelsius(weather.main.temp)}°
            </h2>
          </WeatherWrapper>
        </div>
      )}
    </div>
  );
};
