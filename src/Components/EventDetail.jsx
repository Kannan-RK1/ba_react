import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Col, Image, Row } from "react-bootstrap";

const EventDetail = () => {
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

  const { id } = useParams();
  //console.log("Event ID:", id);
  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "events", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists) {
          setEvent(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div class="container">
      <Row className=" d-flex align-items-center">
        <Col xs={12} sm={12} md={12} lg={6}>
          <div className="mt-3">
            <h1 className="fs-1 fw-bold">{event.title}</h1>
            <div>
              <div className="text-muted fs-6">
                {event.date}...{event.time}
              </div>
              <div className="text-primary fs-5">{event.country}</div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <div className="mt-3">
            <img src={event.image} className="img-fluid" alt="..." />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="mt-3 shadow-none border-start border-danger border-4 p-3 bg-light rounded">
            <h4 className="fw-bold text-danger">About this event</h4>
            <p className="mt-2 fw-bold lh-base">{event.lead}</p>
            <div>{event.description}</div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="mt-3 shadow-none border-start border-danger border-4 p-3 mb-5 bg-light rounded row g-0">
            <Col md={6} lg={6}>
              <h4 className="fw-bold text-danger">Organizer</h4>
              <p className="mt-2 lh-base">{event.organizers}</p>
            </Col>
            <Col md={6} lg={6}>
              <h4 className="fw-bold text-danger">Location</h4>
              <p className="mt-2 lh-base">
                {event.venueName},{event.city},{event.state},{event.country}
              </p>
            </Col>
          </div>
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
      <Row></Row>
    </div>
  );
};

export default EventDetail;
