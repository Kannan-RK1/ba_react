import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Col, Image, Row } from "react-bootstrap";

const SportsDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://s0.2mdn.net/simgad/8641236911096311407",
    "https://tpc.googlesyndication.com/simgad/11881701891935889806",
    "https://tpc.googlesyndication.com/simgad/7076629710210172092",
    "https://tpc.googlesyndication.com/simgad/18192291198114234065",
    "https://tpc.googlesyndication.com/simgad/7064950786490639758",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  });

  const { id } = useParams();
  console.log("id: ", id);
  const [sport, setSport] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "sports", id); // Change "events" to "sports"
        const docSnap = await getDoc(docRef);
        if (docSnap.exists) {
          setSport(docSnap.data());
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
    <div className="container">
      <Row className="d-flex align-items-center">
        <Col xs={12} sm={12} md={12} lg={6}>
          <div className="mt-3">
            <h1 className="fs-1 fw-bold">{sport.title}</h1>
            <div>
              <div className="text-muted fs-6">
                {sport.date}...{sport.time}
              </div>
              <div className="text-primary fs-5">{sport.country}</div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <div className="mt-3">
            <img src={sport.image} className="img-fluid" alt="Sport" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="mt-3 shadow-none border-start border-danger border-4 p-3 bg-light rounded">
            <h4 className="fw-bold text-danger">About this sport</h4>
            <p className="mt-2 fw-bold lh-base">{sport.lead}</p>
            <div>{sport.description}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="mt-3 shadow-none border-start border-danger border-4 p-3 mb-5 bg-light rounded row g-0">
            <Col md={6} lg={6}>
              <h4 className="fw-bold text-danger">Organizer</h4>
              <p className="mt-2 lh-base">{sport.organizers}</p>
            </Col>
            <Col md={6} lg={6}>
              <h4 className="fw-bold text-danger">Location</h4>
              <p className="mt-2 lh-base">
                {sport.venueName}, {sport.city}, {sport.state}, {sport.country}
              </p>
            </Col>
          </div>
        </Col>
      </Row>
      {/* Banner Advertisement */}
      <section className="">
        <Image
          className="mx-auto d-block pt-4 pb-3"
          src={images[currentImageIndex]}
          fluid
        />
      </section>
    </div>
  );
};

export default SportsDetail;
