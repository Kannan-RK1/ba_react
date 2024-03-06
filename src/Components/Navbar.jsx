import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown,
  NavItem,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import my_logo from "../Images/my_logo.png";
import { useFlag } from "./FlagContext";

const NavBar = () => {
  const { setFlag } = useFlag();
  const location = useLocation();

  const handleFlagClick = (flag) => {
    setFlag(flag);
  };
  return (
    <div className="AppNavbar">
      {/* small screen Navbar */}
      <section className="d-lg-none">
        {/* <Navbar
          expand="lg"
          className="bg-body-tertiary"
          style={{ backgroundColor: "white" }}
        >
          <Container fluid>
            <Navbar.Brand as={Link} to="/home">
              <img
                src={my_logo}
                alt="Company Logo"
                height="20"
                className="d-inline-block align-top ps-1"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "150px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/events">
                  Events
                </Nav.Link>
                <Nav.Link as={Link} to="/sports">
                  Sports
                </Nav.Link>
                <Nav.Link as={Link} to="/entertainment">
                  Entertainment
                </Nav.Link>
                <Nav.Link as={Link} to="/campus">
                  Campus
                </Nav.Link>
                <Nav.Link as={Link} to="/matrimonial">
                  Matrimonial
                </Nav.Link>
                <Nav.Link as={Link} to="/travel">
                  Travel
                </Nav.Link>
                <Nav.Link as={Link} to="/fashion">
                  Fashion
                </Nav.Link>
                <Nav.Link as={Link} to="/health">
                  Health
                </Nav.Link>
                <Nav.Link as={Link} to="/realestate">
                  Real Estate
                </Nav.Link>
                <Nav.Link as={Link} to="/auto">
                  Auto
                </Nav.Link>
                <Nav.Link as={Link} to="/immigiration">
                  Immigiration
                </Nav.Link>
                <Nav.Link as={Link} to="/itsystems">
                  IT Systems
                </Nav.Link>
                <Nav.Link as={Link} to="/intakeportal">
                  Intake
                </Nav.Link>
                <Nav.Link as={Link} to="/adminportal">
                  Admin
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="position-relative px-3 pb-3 text-center">
          <div class="d-inline text-white">
            <Button
              type="button"
              className={"btn btn-link px-1 py-0 m-0"}
              onClick={() => handleFlagClick("India")}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                alt="India"
                height="22px"
                className="p-0 m-0"
              />
            </Button>
            <Button
              type="button"
              className={"btn btn-link px-1 py-0 m-0"}
              onClick={() => handleFlagClick("United States")}
            >
              <img
                src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                alt="United States"
                height="22px"
                className="p-0 m-0"
              />
            </Button>
            <Button
              type="button"
              className={"btn btn-link px-1 py-0 m-0"}
              onClick={() => handleFlagClick("United Kingdom")}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/255px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
                alt="United Kingdom"
                height="22px"
                className="p-0 m-0"
              />
            </Button>
            <Button
              type="button"
              className={"btn btn-link px-1 py-0 m-0"}
              onClick={() => handleFlagClick("Canada")}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1024px-Flag_of_Canada.svg.png"
                alt="Canada"
                height="22px"
                className="p-0 m-0"
              />
            </Button>
            <Button
              type="button"
              className={"btn btn-link px-1 py-0 m-0"}
              onClick={() => handleFlagClick("Australia")}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/280px-Flag_of_Australia.svg.png"
                alt="Australia"
                height="22px"
                className="p-0 m-0"
              />
            </Button>
          </div>
        </div> */}
        <Navbar expand="lg" className="MainBar">
          <Container>
            <Navbar.Brand as={Link} to="/home">
              <img
                src={my_logo}
                alt="Company Logo"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav className="ms-auto">
              <NavItem>
                <NavDropdown title="IN" id="dropdown-menu-align-end">
                  <NavDropdown.Item href="#action/3.1">Flag</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">2</NavDropdown.Item>2
                  <NavDropdown.Item href="#action/3.4">3</NavDropdown.Item>
                </NavDropdown>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>

        <div className="d-flex justify-content-between container-fluid">
          <Navbar.Brand as={Link} to="/home">
            <img
              src={my_logo}
              alt="Company Logo"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <div className="ms-auto">
            <DropdownButton
              align="end"
              title="Dropdown end"
              id="dropdown-menu-align-end"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <Navbar expand="lg">
          <Container>
            <div className="menu">
              <div className="menu-item">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
              </div>
              <div className="menu-item">
                <Nav.Link as={Link} to="/events">
                  Events
                </Nav.Link>
              </div>
              <div className="menu-item">
                <Nav.Link as={Link} to="/campus">
                  Campus
                </Nav.Link>
              </div>
              <div className="menu-item">
                <Nav.Link as={Link} to="/entertainment">
                  Entertainment
                </Nav.Link>
              </div>
              <div className="menu-item">
                <Nav.Link as={Link} to="/matrimonial">
                  Matrimonial
                </Nav.Link>
              </div>
              <div className="menu-item">
                <Nav.Link as={Link} to="/travel">
                  Travel
                </Nav.Link>
              </div>
              <div className="menu-item">
                <Nav.Link as={Link} to="/sports">
                  Sports
                </Nav.Link>
              </div>
              <div className="menu-item">
                <Nav.Link as={Link} to="/fashion">
                  Fashion
                </Nav.Link>
              </div>
              <div className="menu-item">
                <Nav.Link as={Link} to="/health">
                  Health
                </Nav.Link>
              </div>
              <div className="menu-item">
                <Nav.Link as={Link} to="/realestate">
                  Real Estate
                </Nav.Link>
              </div>
              <div className="menu-item">
                <Nav.Link as={Link} to="/auto">
                  Auto
                </Nav.Link>
              </div>
              <div className="menu-item">
                <Nav.Link as={Link} to="/immigiration">
                  Immigiration
                </Nav.Link>
              </div>
            </div>
          </Container>
        </Navbar>
      </section>
      {/* Desktop Navbar */}
      <section className="d-none d-lg-block bg-white">
        <div>
          <div
            className="position-relative px-3 pt-3 mb-0"
            style={{ height: "80px " }}
          >
            <div className="position-absolute top-50 start-50 translate-middle">
              <img src={my_logo} alt="Company Logo" height="80" />
            </div>
          </div>
          <div className="position-relative px-3 pb-3 text-center">
            <div class="d-inline text-white">
              <Button
                type="button"
                className={"btn btn-link px-1 py-0 m-0"}
                onClick={() => handleFlagClick("India")}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                  alt="India"
                  height="22px"
                  className="p-0 m-0"
                />
              </Button>
              <Button
                type="button"
                className={"btn btn-link px-1 py-0 m-0"}
                onClick={() => handleFlagClick("United States")}
              >
                <img
                  src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                  alt="United States"
                  height="22px"
                  className="p-0 m-0"
                />
              </Button>
              <Button
                type="button"
                className={"btn btn-link px-1 py-0 m-0"}
                onClick={() => handleFlagClick("United Kingdom")}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/255px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
                  alt="United Kingdom"
                  height="22px"
                  className="p-0 m-0"
                />
              </Button>
              <Button
                type="button"
                className={"btn btn-link px-1 py-0 m-0"}
                onClick={() => handleFlagClick("Canada")}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1024px-Flag_of_Canada.svg.png"
                  alt="Canada"
                  height="22px"
                  className="p-0 m-0"
                />
              </Button>
              <Button
                type="button"
                className={"btn btn-link px-1 py-0 m-0"}
                onClick={() => handleFlagClick("Australia")}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/280px-Flag_of_Australia.svg.png"
                  alt="Australia"
                  height="22px"
                  className="p-0 m-0"
                />
              </Button>
            </div>
          </div>
          <Navbar className=" pb-3 justify-content-center">
            <Nav
              className="justify-content-center fw-bold "
              defaultActiveKey="/home"
            >
              <Nav.Link
                as={Link}
                to="/home"
                className={`${
                  location.pathname === "/home" ? "text-danger" : "text-custom"
                }`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/events"
                className={`${
                  location.pathname === "/events"
                    ? "text-danger"
                    : "text-custom"
                }`}
              >
                Events
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/sports"
                className={`${
                  location.pathname === "/sports"
                    ? "text-danger"
                    : "text-custom"
                }`}
              >
                Sports
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/entertainment"
                className={`${
                  location.pathname === "/entertainment"
                    ? "text-danger"
                    : "text-custom"
                }`}
              >
                Entertainment
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/campus"
                className={`${
                  location.pathname === "/campus"
                    ? "text-danger"
                    : "text-custom"
                }`}
              >
                Campus
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/matrimonial"
                className={`${
                  location.pathname === "/matrimonial"
                    ? "text-danger"
                    : "text-custom"
                }`}
              >
                Matrimonial
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/travel"
                className={`${
                  location.pathname === "/travel"
                    ? "text-danger"
                    : "text-custom"
                }`}
              >
                Travel
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/fashion"
                className={`${
                  location.pathname === "/fashion"
                    ? "text-danger"
                    : "text-custom"
                }`}
              >
                Fashion
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/health"
                className={`${
                  location.pathname === "/health"
                    ? "text-danger"
                    : "text-custom"
                }`}
              >
                Health
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/realestate"
                className={`${
                  location.pathname === "/realestate"
                    ? "text-danger"
                    : "text-custom"
                }`}
              >
                Real Estate
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/auto"
                className={`${
                  location.pathname === "/auto" ? "text-danger" : "text-custom"
                }`}
              >
                Auto
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/immigiration"
                className={`${
                  location.pathname === "/immigiration"
                    ? "text-danger"
                    : "text-custom"
                }`}
              >
                Immigiration
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/itsystems"
                className={`${
                  location.pathname === "/itsystems"
                    ? "text-danger"
                    : "text-custom"
                }`}
              >
                IT Systems
              </Nav.Link>
              <Nav.Link as={Link} to="/intakeportal">
                Intake
              </Nav.Link>
              <Nav.Link as={Link} to="/adminportal">
                Admin
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
