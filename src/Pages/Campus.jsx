import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Image, Row } from "react-bootstrap";

const Campus = () => {
  const [healthData, setHealthData] = useState(null); // Initialize healthData as null
  const apiUrl =
    "https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=30584";

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            Type: "topic",
          },
        });

        const data = response.data;
        setHealthData(data.Result.Resources.Resource[0]); // Access the first topic in the response
      } catch (error) {
        console.error("Error fetching health data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect once when the component mounts

  return (
    <div>
      <br></br>
      {healthData ? (
        <div className="container">
          <Row>
            <Col lg={7} className="d-flex align-items-center">
              <h2 className="text-primary">{healthData.Title}</h2>
              <p>{healthData.Summary}</p>
            </Col>
            <Col lg={3}>
              <Image src={healthData.ImageUrl} alt="image"></Image>
            </Col>
          </Row>
          <hr style={{ color: "blue", height: "5px" }} className="" />

          {healthData.Sections.section.map((section, index) => (
            <div key={index}>
              <p dangerouslySetInnerHTML={{ __html: section.Content }}></p>
              {/* Use dangerouslySetInnerHTML to render HTML content */}
            </div>
          ))}

          <h2>{healthData.HealthfinderLogo}</h2>
          <Image src={healthData.HealthfinderLogo} alt="image"></Image>
          {/* You can display other fields from the response as needed */}
        </div>
      ) : (
        <p>Loading health data...</p>
      )}
    </div>
  );
};

export default Campus;
