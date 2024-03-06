import "./App.css";
import NavBar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Campus from "./Pages/Campus";
import Entertainment from "./Pages/Entertainment";
import Matrimonial from "./Pages/Matrimonial";
import Travel from "./Pages/Travel";
import Sports from "./Pages/Sports";
import Fashion from "./Pages/Fashion";
import Health from "./Pages/Health";
import Realestate from "./Pages/Realestate";
import Auto from "./Pages/Auto";
import Immigiration from "./Pages/Immigiration";
import ITSystems from "./Pages/ITSystems";
import IntakePortal from "./Pages/IntakePortal";
import AdminPortal from "./Pages/AdminPortal";
import EventDetail from "./Components/EventDetail";
import MovieDetails from "./Components/MovieDetails";
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import Food from "./Pages/Food";
import Culture from "./Pages/Culture";
import { GeoLocationProvider } from "./Components/GeoLocation"; // Import the GeoLocationProvider
import { FlagProvider } from "./Components/FlagContext";
import SportsDetail from "./Components/SportsDetail";
import LocalEventDetail from "./Components/LocalEventDetail";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://tpc.googlesyndication.com/simgad/6820256928359497909",
    "https://tpc.googlesyndication.com/simgad/2241008128952225169",
    "https://tpc.googlesyndication.com/simgad/7076629710210172092",
    "https://tpc.googlesyndication.com/simgad/18192291198114234065",
    "https://tpc.googlesyndication.com/simgad/7064950786490639758",
  ];

  // useEffect hook to handle image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current image index, reset to 0 if it exceeds the number of images
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds interval
    return () => {
      // Clear the interval when the component unmounts
      clearInterval(interval);
    };
  });

  const style = {
    fontFamily: "Poppins, sans-serif",
    WebkitFontSmoothing: "antialiased", // Use Webkit prefix
    MozOsxFontSmoothing: "grayscale", // Add this for Firefox
    backgroundColor: "white", //#e6e7ea
  };

  return (
    <div className="App" style={style}>
      <GeoLocationProvider>
        <FlagProvider>
          <BrowserRouter>
            {/* ............Banner Advertisement...................... */}
            <section style={{ backgroundColor: "rgb(238, 238, 238" }}>
              <Image
                className="mx-auto d-block pt-4 pb-3"
                src={images[currentImageIndex]}
                fluid
              />
            </section>
            <NavBar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home/:id" elements={<EventDetail />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/campus" element={<Campus />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route
                path="/entertainment/localEvent/:eventId"
                element={<LocalEventDetail />}
              />
              <Route
                path="/entertainment/movies/:eventId"
                element={<MovieDetails />}
              />
              <Route path="/matrimonial" element={<Matrimonial />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/sports/:id" element={<SportsDetail />} />
              <Route path="/fashion" element={<Fashion />} />
              <Route path="/health" element={<Health />} />
              <Route path="/realestate" element={<Realestate />} />
              <Route path="/auto" element={<Auto />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/food" element={<Food />} />
              <Route path="/immigiration" element={<Immigiration />} />
              <Route path="/itsystems" element={<ITSystems />} />
              <Route path="/intakeportal" element={<IntakePortal />} />
              <Route path="/adminportal" element={<AdminPortal />} />
            </Routes>
          </BrowserRouter>
        </FlagProvider>
      </GeoLocationProvider>
    </div>
  );
}

export default App;
