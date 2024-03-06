import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CarouselCard = ({ dataToDisplay }) => {
  const current = new Date();
  const todayDate = new Date(); // Current date

  const sixthDate = new Date(current);
  sixthDate.setDate(current.getDate() + 6);

  // Filter data based on date
  const filteredData = dataToDisplay.filter((card) => {
    const cardDate = new Date(card.date); // Convert cardDate to a Date object

    return cardDate >= todayDate && cardDate <= sixthDate;
  });

  const [startIndex, setStartIndex] = useState(0);

  const handleMoveLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleMoveRight = () => {
    if (startIndex < filteredData.length - getVisibleCards()) {
      setStartIndex(startIndex + 1);
    }
  };

  const getVisibleCards = () => {
    if (window.innerWidth < 576) {
      // Mobile screens
      return 1;
    } else if (window.innerWidth < 992) {
      // Tablet screens
      return 3;
    } else {
      // Laptop screens and larger
      return 4;
    }
  };

  const visibleCardSlice = filteredData.slice(
    startIndex,
    startIndex + getVisibleCards()
  );

  return (
    <Container fluid>
      <div className="d-flex justify-content-end m-1">
        <button
          className="btn  btn-outline-dark m-1"
          onClick={handleMoveLeft}
          disabled={startIndex === 0}
        >
          {"<"}
        </button>
        <button
          className="btn  btn-outline-dark m-1"
          onClick={handleMoveRight}
          disabled={startIndex === filteredData.length - getVisibleCards()}
        >
          {">"}
        </button>
      </div>
      <Row>
        <div className="card-container">
          {visibleCardSlice.map((card, index) => (
            <Col
              xs={12}
              sm={6}
              md={4} // Adjust the column size for responsiveness
              lg={3}
              key={index}
              className={`slide-card${index}`}
            >
              <Card className="rounded-0 m-1">
                <Card.Img
                  variant="top"
                  src={card.image} // Make sure card.image contains valid image URLs
                  className="img-fluid rounded-0"
                  style={{ height: "140px" }}
                />
                <Card.Body>
                  <Card.Text className="fw-bold">{card.title}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="text-primary">
                      {card.country}
                    </Card.Text>
                    <Card.Text className="">{card.date}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default CarouselCard;
