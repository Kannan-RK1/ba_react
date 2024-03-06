import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore"; // Import Firebase Firestore related functions if you are using Firebase.
import { db } from "../firebase";

function SportForm() {
  const [formData, setFormData] = useState({
    title: "",
    lead: "",
    description: "",
    image: "",
    categoriesTags: "",
    date: "",
    time: "", // Added time field
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const AddFormData = async (e) => {
    e.preventDefault();
    try {
      const formDataRef = collection(db, "sports");

      const formDataWithStatus = { ...formData, status: false };

      await addDoc(formDataRef, formDataWithStatus);
      setFormData({
        title: "",
        lead: "",
        description: "",
        image: "",
        categoriesTags: "",
        date: "",
        time: "", // Reset time field
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
      <h5 className="text-danger">Sports Form</h5>
      <Form onSubmit={AddFormData}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
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
                value={formData.lead}
                onChange={handleChange}
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
                value={formData.image}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="categoriesTags">
              <Form.Label>Categories or Tags</Form.Label>
              <Form.Control
                type="text"
                name="categoriesTags"
                value={formData.categoriesTags}
                onChange={handleChange}
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
                value={formData.description}
                onChange={handleChange}
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
                value={formData.date}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="time">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
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
                value={formData.venueName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
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
                value={formData.state}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
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
                value={formData.organizers}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="contactDetails">
              <Form.Label className="pb-0">Contact Details</Form.Label>
              <Form.Control
                type="text"
                name="contactDetails"
                value={formData.contactDetails}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="priority">
              <Form.Label>Priority</Form.Label>
              <Form.Select
                onChange={handleChange}
                name="priority"
                value={formData.priority}
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
                value={formData.socialSharing}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button className="mt-2" type="submit">
          Add
        </Button>
      </Form>
    </>
  );
}

export default SportForm;
