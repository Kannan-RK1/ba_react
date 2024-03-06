import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Eventscard from "../Components/Eventscard";
import Weather from "../Components/Weather";

const Home = () => {
  return (
    <>
      <section style={{ backgroundColor: "#e6e7ea" }}>
        <Container>
          <h4 className="pt-3 mb-3 fw-bolder">Top Picks</h4>
          <Row className="g-0">
            <Col lg={9} md={9} sm={12} xs={12}>
              <Eventscard /> {/* Component to display events */}
            </Col>
            <Col lg={3} md={3}>
              <Weather /> {/* Component to display weather */}
              <Image
                className="mx-auto d-block pt-4 border mt-3"
                src="https://tpc.googlesyndication.com/simgad/1392822534263548062"
                fluid
              />
              <ins
                class="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-4916208654549878"
                data-ad-slot="8782620021"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
