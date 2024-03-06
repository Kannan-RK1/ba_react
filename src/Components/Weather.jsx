// Weather.js

import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useGeoLocation } from "./GeoLocation";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const apiKey = "a5f3a951cc9b40b88d490245233108"; // Replace with your actual WeatherAPI API key
  const { city } = useGeoLocation();

  useEffect(() => {
    // Fetch weather data for the obtained city
    if (city) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setWeatherData(data))
        .catch((error) => console.error("Error fetching weather data:", error));
    }
  }, [apiKey, city]);

  const convertToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  return (
    <div
      className="border border-primary p-3"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #AED2FF, #FFFFFF)",
      }}
    >
      <h4>Live Weather</h4>
      {weatherData.current && (
        <Row>
          <Col>
            <small>{weatherData.current.temp_c}°C</small>
          </Col>
          <Col>
            <small>{convertToFahrenheit(weatherData.current.temp_c)}°F</small>
          </Col>
          <Col>
            <small className="text-primary fw-bold">{city}</small>
          </Col>
          <p>{weatherData.current.condition.text}</p>
        </Row>
      )}
    </div>
  );
};

export default Weather;
