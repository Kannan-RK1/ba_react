import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Container, Row, Col, Image } from "react-bootstrap";

const LocalEventDetail = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://s0.2mdn.net/simgad/8641236911096311407",
    "https://tpc.googlesyndication.com/simgad/11881701891935889806",
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

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventRef = doc(db, "localEvents", eventId);
        const eventDoc = await getDoc(eventRef);

        if (eventDoc.exists()) {
          const eventData = eventDoc.data();
          setEventData(eventData);
        } else {
          console.log("Local event not found");
        }
      } catch (error) {
        console.error("Error fetching local event data:", error);
      }
    };

    fetchEventData();
  }, [eventId]);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <section style={{ backgroundColor: "#f5f5f5" }}>
      <Container className=" pt-3">
        <Row
          className="border border-light-subtle border-2 rounded-3  p-3"
          style={{ backgroundColor: "white" }}
        >
          <Col sm={12} md={4} lg={2} className="mt-3">
            <Image
              src={eventData.image}
              alt={eventData.lead}
              fluid
              className="border "
            />
          </Col>
          <Col sm={12} md={8} lg={10} className="mt-3">
            <p className="text-danger">
              <strong>Date:</strong> {eventData.date}
            </p>
            <h2 className="event-title">{eventData.title}</h2>
            <h6>
              <strong>
                <svg
                  class="svg-inline--fa fa-star fa-w-18 text-orange fs-12 me-1 align-baseline fa-fw"
                  style={{ width: "17.5px", height: "14px", color: "red" }}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fa"
                  data-icon="star"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                  ></path>
                </svg>
              </strong>{" "}
              {eventData.categoriesTags}
            </h6>
            <h6>
              <strong>
                <svg
                  class="svg-inline--fa fa-map-marker-alt fa-w-12 text-orange fa-fw me-1"
                  aria-hidden="true"
                  style={{ width: "17.5px", height: "14px", color: "red" }}
                  focusable="false"
                  data-prefix="fas"
                  data-icon="map-marker-alt"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                  ></path>
                </svg>
              </strong>{" "}
              {eventData.city}, {eventData.state}, {eventData.country}
            </h6>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <p>
              <strong>{eventData.lead}</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p align="justify">{eventData.description}</p>
          </Col>
        </Row>
        <Row
          className="mt-3 shadow-none border-start border-danger border-4 p-3 bg-light rounded"
          style={{ backgroundColor: "white" }}
        >
          <Col md={3}>
            <h6 className="fw-bolder">Event Type</h6>
            {eventData.categoriesTags}
          </Col>
          <Col md={3}>
            <h6 className="fw-bolder">Event Date</h6>
            {eventData.date}
          </Col>
          <Col md={3}>
            <h6 className="fw-bolder ">Event Time</h6>
            {eventData.time}
          </Col>
          <Col md={3}>
            <h6 className="fw-bolder ">Event Country</h6>
            {eventData.country}
          </Col>
        </Row>
        {/* ............Banner Advertisement...................... */}
        <section className="">
          <Image
            className="mx-auto d-block pt-4 pb-3"
            src={images[currentImageIndex]}
            fluid
          />
        </section>
      </Container>
    </section>
  );
};

export default LocalEventDetail;
