import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

const Health = () => {
  const [healthData, setHealthData] = useState([]); // Initialize healthData as an array
  const topicIds = [530, 531, 532, 533]; // Add the topic IDs you want to retrieve

  useEffect(() => {
    // Fetch data for each topic when the component mounts
    const fetchData = async () => {
      const topicsData = [];

      for (const topicId of topicIds) {
        try {
          const apiUrl = `https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=${topicId}`;
          const response = await axios.get(apiUrl, {
            params: {
              Type: "topic",
            },
          });

          const data = response.data;
          topicsData.push(data.Result.Resources.Resource[0]);
        } catch (error) {
          console.error("Error fetching health data:", error);
        }
      }

      setHealthData(topicsData);
    };

    fetchData();
  }, []); // Empty dependency array to run the effect once when the component mounts

  return (
    <Container fluid>
      <br></br>
      {healthData.length > 0 ? (
        <Row>
          {healthData.map((topic, index) => (
            <Col md={6} sm={12} lg={3} key={index}>
              <Card>
                <Card.Img variant="top" src={topic.ImageUrl} />
                <Card.Body>
                  <Card.Text>
                    <h5>{topic.Title}</h5>
                    <small>{topic.Categories}</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Loading health data...</p>
      )}
    </Container>
  );
};

export default Health;
