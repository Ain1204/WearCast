import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const TemperText = styled.div``;
const MaxMin = styled.div``;
const SpaceAround = styled.div``;
function Weather() {
  const [weatherData, setWeatherData] = useState({
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    desc: "",
    icon: "",
    loading: true,
  });

  useEffect(() => {
    const cityName = "Incheon";
    const apiKey = "430712ee32e8bfd14432fd3edb17c173";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData({
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          humidity: data.main.humidity,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  if (weatherData.loading) {
    return <p>Loading</p>;
  }

  return (
    <Wrapper>
      <SpaceAround>
        <div>
          <TemperText>{(weatherData.temp - 273.15).toFixed(0)}°</TemperText>
        </div>
      </SpaceAround>
      <MaxMin>
        최고: {(weatherData.temp_max - 273.15).toFixed(0)}° 최저:{" "}
        {(weatherData.temp_min - 273.15).toFixed(0)}°
      </MaxMin>
    </Wrapper>
  );
}

export default Weather;
