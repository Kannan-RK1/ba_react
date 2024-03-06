import React, { useState } from "react";
import { Form, Button, Row, Col, Tabs, Tab } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore"; // Import Firebase Firestore related functions if you are using Firebase.
import { db } from "../firebase";

const EntertainmentForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    genre: "",
    releaseDate: "",
    language: "",
    production: "",
    country: "",
    subtitles: "",
    duration: "",
    state: "",
    city: "",
    rating: "",
    status: false,
  });

  const [youtubeLinkID, setYoutubeLinkID] = useState("");

  const [localData, setLocalData] = useState({
    title: "",
    lead: "",
    description: "",
    image: "",
    categoriesTags: "",
    date: "",
    time: "",
    venueName: "",
    city: "",
    state: "",
    country: "",
    contactDetails: "",
    socialSharing: "",
    organizers: "",
    priority: "",
    status: false,
  });

  //------------------------------------------------------------------------------------//
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setLocalData({
      ...localData,
      [name]: value,
    });
  };

  const handleYoutubeLinkChange = (e) => {
    setYoutubeLinkID(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //------------------------------------------------------------------------------------//
  //Movies intake form
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const formDataRef = collection(db, "movies");
      const formDataWithStatus = { ...formData, status: false };
      await addDoc(formDataRef, formDataWithStatus);
      setFormData({
        title: "",
        description: "",
        image: "",
        genre: "",
        releaseDate: "",
        language: "",
        production: "",
        country: "",
        subtitles: "",
        duration: "",
        state: "",
        city: "",
        rating: "",
        status: false,
      });
    } catch (error) {
      console.error("Error adding event data:", error);
    }
  };

  //Youtube ID intake form
  const handleSubmitYouTubeLink = async (e) => {
    e.preventDefault();
    try {
      const releasesRef = collection(db, "releases");
      const releaseData = {
        youtubeLinkID: youtubeLinkID,
      };
      await addDoc(releasesRef, releaseData);
      setYoutubeLinkID("");
    } catch (error) {
      console.error("Error adding YouTube link to database:", error);
    }
  };

  //Local Fun Events intake form
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const formDataRef = collection(db, "localEvents");
      const formDataWithStatus = { ...localData, status: false };
      await addDoc(formDataRef, formDataWithStatus);
      setLocalData({
        title: "",
        lead: "",
        description: "",
        image: "",
        categoriesTags: "",
        date: "",
        time: "",
        venueName: "",
        city: "",
        state: "",
        country: "",
        contactDetails: "",
        socialSharing: "",
        organizers: "",
        priority: "",
        status: false,
      });
    } catch (error) {
      console.error("Error adding event data:", error);
    }
  };

  return (
    <>
      <h5 className="text-danger">Entertainment Form</h5>
      <Tabs defaultActiveKey="movie" id="entertainment-tabs">
        <Tab eventKey="movie" title="Movie">
          <Form onSubmit={handleSubmit1}>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Title:</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Description:</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Image URL:</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Genre:</Form.Label>
                  <Form.Control
                    type="text"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Release Date:</Form.Label>
                  <Form.Control
                    type="date"
                    name="releaseDate"
                    value={formData.releaseDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Language:</Form.Label>
                  <Form.Control
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Production Studio:</Form.Label>
                  <Form.Control
                    type="text"
                    name="production"
                    value={formData.production}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Country of Origin:</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Subtitles:</Form.Label>
                  <Form.Control
                    type="text"
                    name="subtitles"
                    value={formData.subtitles}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Duration (in minutes):</Form.Label>
                  <Form.Control
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>State:</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>City:</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Ratings:</Form.Label>
                  <Form.Control
                    type="text"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" className="mt-3" type="submit">
              Submit
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="releases" title="Releases">
          <Form onSubmit={handleSubmitYouTubeLink}>
            <Row>
              <Col md={12}>
                <h3 className="mb-4">Add Release Information</h3>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group>
                  <Form.Label>YouTube Video ID:</Form.Label>
                  <Form.Control
                    type="text"
                    name="youtubeLink"
                    value={youtubeLinkID}
                    onChange={handleYoutubeLinkChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" className="mt-3" type="submit">
              Add ID
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="local" title="Local">
          <Form onSubmit={handleSubmit2}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={localData.title}
                    onChange={handleChange1}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="lead">
                  <Form.Label>Lead</Form.Label>
                  <Form.Control
                    type="text"
                    name="lead"
                    value={localData.lead}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="image">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    value={localData.image}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="categoriesTags">
                  <Form.Label>Categories or Tags</Form.Label>
                  <Form.Control
                    type="text"
                    name="categoriesTags"
                    value={localData.categoriesTags}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={localData.description}
                    onChange={handleChange1}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={localData.date}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="time">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="time"
                    value={localData.time}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="venueName">
                  <Form.Label>Venue Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="venueName"
                    value={localData.venueName}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={localData.city}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={localData.state}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={localData.country}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="organizers">
                  <Form.Label>Organizers</Form.Label>
                  <Form.Control
                    type="text"
                    name="organizers"
                    value={localData.organizers}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="contactDetails">
                  <Form.Label className="pb-0">Contact Details</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactDetails"
                    value={localData.contactDetails}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="priority">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    onChange={handleChange1}
                    name="priority"
                    value={localData.priority}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="socialSharing">
                  <Form.Label>Social Sharing</Form.Label>
                  <Form.Control
                    type="text"
                    name="socialSharing"
                    value={localData.socialSharing}
                    onChange={handleChange1}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button className="mt-2" type="submit">
              Add
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </>
  );
};

export default EntertainmentForm;
