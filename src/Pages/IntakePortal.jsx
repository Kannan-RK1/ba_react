import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import EventForm from "../Components/EventForm";
import SportForm from "../Components/SportForm";
import EntertainmentForm from "../Components/EntertainmentForm";

function IntakePortal() {
  return (
    <section style={{ backgroundColor: "rgb(238, 238, 238" }}>
      <Tab.Container id="intake-tabs" defaultActiveKey="events">
        <Row>
          <Col
            sm={2}
            lg={2}
            className="ms-5 me-2 my-3 px-3 py-3 border border-1 border-secondary rounded-4"
            style={{ backgroundColor: "white" }}
          >
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="events">
                  Events
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="campus">
                  Campus
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="entertainment">
                  Entertainment
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="matrimonial">
                  Matrimonial
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="travel">
                  Travel
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="sports">
                  Sports
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="fashion">
                  Fashion
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="health">
                  Health
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="realestate">
                  Real Estate
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="auto">
                  Auto
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="immigration">
                  Immigration
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-secondary" eventKey="itsystems">
                  IT Systems
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9} lg={9}>
            <Tab.Content
              style={{ backgroundColor: "white" }}
              className="my-3 px-3 py-3 border border-1 border-secondary rounded-4"
            >
              <Tab.Pane eventKey="events">
                <EventForm />
              </Tab.Pane>
              <Tab.Pane eventKey="sports">
                <SportForm />
              </Tab.Pane>
              <Tab.Pane eventKey="entertainment">
                <EntertainmentForm />
              </Tab.Pane>
              <Tab.Pane eventKey="matrimonial">
                {/* Content for the Matrimonial tab */}
              </Tab.Pane>
              <Tab.Pane eventKey="travel">
                {/* Content for the Travel tab */}
              </Tab.Pane>
              <Tab.Pane eventKey="campus">
                {/* Content for the Sports tab */}
              </Tab.Pane>
              <Tab.Pane eventKey="fashion">
                {/* Content for the Fashion tab */}
              </Tab.Pane>
              <Tab.Pane eventKey="health">
                {/* Content for the Health tab */}
              </Tab.Pane>
              <Tab.Pane eventKey="realestate">
                {/* Content for the Real Estate tab */}
              </Tab.Pane>
              <Tab.Pane eventKey="auto">
                {/* Content for the Auto tab */}
              </Tab.Pane>
              <Tab.Pane eventKey="immigration">
                {/* Content for the Immigration tab */}
              </Tab.Pane>
              <Tab.Pane eventKey="itsystems">
                {/* Content for the IT Systems tab */}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
}

export default IntakePortal;
