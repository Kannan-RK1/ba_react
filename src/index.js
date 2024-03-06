import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Simulate setting the country data (You can replace this with actual geolocation data)
const initialCountryName = "India";

root.render(
  <React.StrictMode>
    <App initialCountryName={initialCountryName} />
  </React.StrictMode>
);

reportWebVitals();
