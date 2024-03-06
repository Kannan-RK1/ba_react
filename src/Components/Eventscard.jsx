import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useGeoLocation } from "./GeoLocation"; // Import the GeoLocation context
import { useFlag } from "../Components/FlagContext";

const Eventscard = () => {
  const [events, setEvents] = useState([]);
  const { country } = useGeoLocation(); // Get the country from the GeoLocation context
  const { selectedFlag } = useFlag();

  useEffect(() => {
    const fetchData = async () => {
      const eventsRef = collection(db, "events");
      const eventsSnapshot = await getDocs(eventsRef);

      const highPriorityEvents = [];

      eventsSnapshot.forEach((doc) => {
        const eventData = { id: doc.id, ...doc.data() };

        // Check if the "priority" field is "high" before adding it to the highPriorityEvents array
        if (eventData.priority === "High") {
          highPriorityEvents.push(eventData);
        }
      });

      // Sort events based on the 'country' field
      const sortedEvents = highPriorityEvents.sort((a, b) => {
        if (selectedFlag) {
          // If selectedFlag is set, sort by it
          if (a.country === selectedFlag) return -1;
          else if (b.country === selectedFlag) return 1;
        } else {
          // Sort by geolocation 'country' if selectedFlag is not set or doesn't match
          if (a.country === country) return -1;
          else if (b.country === country) return 1;
        }
        return 0;
      });

      setEvents(sortedEvents);
    };

    fetchData();
  }, [selectedFlag, country]);

  // Re-run the effect when the 'country' changes

  return (
    <div>
      <div className="d-flex  flex-wrap">
        {events.map((event) => (
          <div
            className="card mb-3 border-white rounded-0"
            key={event.id}
            style={{ maxWidth: "800px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={event.image}
                  className="img-fluid p-2 align-middle"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h6 className="card-title">{event.title}</h6>
                  <small className="card-text text-muted">{event.lead}</small>
                  <div className="row g-0">
                    <div className="col">
                      <div>
                        <small className="text-muted">{event.date}</small>...
                        <small className="text-primary">{event.venue}</small>
                      </div>
                    </div>
                    <div className="col text-end">
                      <Link to={`${event.id}`} className="btn btn-dark btn-sm">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventscard;
