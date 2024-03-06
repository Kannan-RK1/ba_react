import React, { createContext, useContext, useState, useEffect } from "react";
import { countryCodesToNames } from "./countryCodesToNames";

const GeoLocationContext = createContext();

export const useGeoLocation = () => {
  return useContext(GeoLocationContext);
};

export const GeoLocationProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState(""); // Initialize country with selectedCountry

  useEffect(() => {
    // Get user's location based on IP address
    fetch("https://ipinfo.io/json?token=27f655aff05e14")
      .then((response) => response.json())
      .then((data) => {
        const userCity = data.city;
        const userCountryCode = data.country; // Use "country" for the country code
        setCity(userCity);

        // Check if the country code is available
        if (userCountryCode) {
          const userCountryName = countryCodesToNames[userCountryCode]; // Convert code to name
          if (userCountryName) {
            setCountry(userCountryName);
            console.log("Country:", userCountryName);
          } else {
            console.error("Country name not found for code:", userCountryCode);
          }
        } else {
          console.error("Country code not available in the response");
        }
      })
      .catch((error) => console.error("Error fetching location data:", error));
  }, []); // Trigger the effect when selectedCountry changes

  const geoLocationData = { city, country }; // Include selectedFlag in geoLocationData

  return (
    <GeoLocationContext.Provider value={geoLocationData}>
      {children}
    </GeoLocationContext.Provider>
  );
};
