import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useGeoLocation } from "../Components/GeoLocation";
import { useFlag } from "../Components/FlagContext";
import CarouselCard from "../Components/CarouselCard";

const Sports = () => {
  const [sports, setSports] = useState([]);
  const { country } = useGeoLocation();
  const { selectedFlag } = useFlag();

  useEffect(() => {
    const fetchData = async () => {
      const sportsRef = collection(db, "sports"); // Change "events" to "sports"
      const sportsSnapshot = await getDocs(sportsRef);

      const sportsData = [];
      sportsSnapshot.forEach((doc) => {
        sportsData.push({ id: doc.id, ...doc.data() });
      });

      const sortedSports = sportsData.sort((a, b) => {
        if (selectedFlag) {
          if (a.country === selectedFlag) return -1;
          else if (b.country === selectedFlag) return 1;
        } else {
          if (a.country === country) return -1;
          else if (b.country === country) return 1;
        }
        return 0;
      });

      setSports(sortedSports);
    };

    fetchData();
  }, [country, selectedFlag]);

  const renderAdvertisement = (index) => {
    if (index > 0 && index % 3 === 0) {
      return (
        <div
          className="card ms-2 mb-3 rounded-0"
          key={`advertisement-${index}`}
          style={{ maxWidth: "970px" }}
        >
          <small className="px-2 py-0 mb-0 text-muted">Advertisement</small>
          <div className="row g-0">
            <div className="col-md-12 text-center">
              <img
                src="https://tpc.googlesyndication.com/simgad/13173894910014374707"
                className="img-fluid pb-2"
                alt="..."
              />
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section style={{ backgroundColor: "#e6e7ea" }}>
      <Container fluid>
        <Row className="g-0">
          <Col xs={12} sm={12} md={9} lg={9}>
            <h4 className="pt-3 ms-2 fw-bolder">Trending Sports</h4>
            <div className="d-flex mt-3 flex-wrap">
              {sports.map((sports, index) => (
                <>
                  <div
                    className="card mb-3 ms-2 border-white rounded-0"
                    key={sports.id}
                    style={{ maxWidth: "970px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={sports.image}
                          className="img-fluid p-2"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h6 className="card-title">{sports.title}</h6>
                          <small className="card-text text-muted">
                            {sports.lead}
                          </small>
                          <div className="row g-0">
                            <div className="col">
                              <div>
                                <small className="text-muted">
                                  {sports.date}
                                </small>
                                ...
                                <small className="text-primary">
                                  {sports.country}
                                </small>
                              </div>
                            </div>
                            <div className="col text-end">
                              <Link
                                to={`${sports.id}`}
                                className="btn btn-dark btn-sm"
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {renderAdvertisement(index + 1)}
                </>
              ))}
            </div>
          </Col>
          <Col lg={3} style={{ backgroundColor: "#cedbf0" }}>
            <h5 className="my-3 ps-3 text-muted">Advertisements</h5>
            <div>
              <Image
                className="mx-auto d-block mb-2 border"
                src="https://s0.2mdn.net/simgad/2567206393171483633"
                fluid
              />
            </div>
            <div>
              <Image
                className="mx-auto d-block mb-2 border"
                src="https://tpc.googlesyndication.com/simgad/9748804752738274807"
                fluid
              />
            </div>
            <div>
              <Image
                className="mx-auto d-block mb-2 border"
                src="https://tpc.googlesyndication.com/simgad/17487155209511840079"
                fluid
              />
            </div>
            <div>
              <Image
                className="mx-auto d-block mb-2 border"
                src="https://tpc.googlesyndication.com/simgad/4163983573590011300"
                fluid
              />
            </div>

            <div>
              <Image
                className="mx-auto d-block mb-2 border"
                src="https://tpc.googlesyndication.com/simgad/2550331169086232321"
                fluid
              />
            </div>
            <div>
              <Image
                className="mx-auto d-block mb-2 border"
                src="https://tpc.googlesyndication.com/simgad/584524984796833078"
                fluid
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="g-0" style={{ backgroundColor: "#f0f5f4" }}>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h4 className="pt-3 ms-2 fw-bolder">Upcoming Sports</h4>
          <CarouselCard dataToDisplay={sports} />
        </Col>
      </Row>
    </section>
  );
};

export default Sports;
