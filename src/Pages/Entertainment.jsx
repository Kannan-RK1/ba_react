import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import YouTube from "react-youtube";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Entertainment = () => {
  const [videoData, setVideoData] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    const fetchLocalData = async () => {
      try {
        const localRef = collection(db, "localEvents");
        const querySnapshot = await getDocs(localRef);
        const local = [];

        querySnapshot.forEach((doc) => {
          const localData = doc.data();
          local.push({
            id: doc.id,
            image: localData.image,
            title: localData.title, // Add the title field
          });
        });

        setLocalData(local);
      } catch (error) {
        console.error("Error fetching local events data:", error);
      }
    };

    fetchLocalData();
  }, []);
  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const moviesRef = collection(db, "movies"); // Replace "movies" with your collection name
        const querySnapshot = await getDocs(moviesRef);
        const movies = [];

        querySnapshot.forEach((doc) => {
          const movieData = doc.data();
          movies.push({
            id: doc.id,
            image: movieData.image,
          });
        });

        setMoviesData(movies);
      } catch (error) {
        console.error("Error fetching movies data:", error);
      }
    };

    fetchMoviesData();
  }, []);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const releasesRef = collection(db, "releases");
        const querySnapshot = await getDocs(releasesRef);
        const videos = [];

        querySnapshot.forEach((doc) => {
          const youtubeLinkID = doc.data().youtubeLinkID;
          videos.push({ youtubeLinkID });
        });

        setVideoData(videos);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideoData();
  }, []);

  // Slick settings for the slider
  var slickSettings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var slickSettings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="pt-3">
        <Container fluid>
          <h4 className="pt-3 ms-2 fw-bolder">Local Entertainments</h4>
          <Row
            className="video-row mx-3 pt-2 d-flex justify-content-evenly"
            style={{ backgroundColor: "#333" }}
          >
            <Col lg={8} className="pb-2">
              <Slider {...slickSettings2}>
                {localData.map((localEvent, index) => (
                  <div key={index} className="border px-1">
                    <Link to={`/entertainment/localEvent/${localEvent.id}`}>
                      <img
                        src={localEvent.image}
                        className="img-fluid p-1"
                        alt={localEvent.title}
                      />
                    </Link>
                    <p className="text-light p-2">{localEvent.title}</p>
                  </div>
                ))}
              </Slider>
            </Col>
            <Col className="" lg={3}>
              <div className="py-2">
                <Image
                  className="mx-auto d-block my-2 border"
                  src="https://tpc.googlesyndication.com/simgad/584524984796833078"
                  fluid
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid>
          <h4 className="pt-3 ms-2 fw-bolder">Latest Release</h4>
          <Row className="video-row mx-3 d-flex justify-content-evenly">
            <Col>
              <Slider {...slickSettings1}>
                {videoData.map((video, index) => (
                  <div key={index} className="video-container">
                    <div className="video-thumbnail">
                      <YouTube
                        videoId={video.youtubeLinkID}
                        opts={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-3">
        <Container fluid>
          <h4 className="pt-3 ms-2 fw-bolder">Trending Movies</h4>
          <Row
            className="video-row mx-3 pt-2 d-flex justify-content-evenly"
            style={{ backgroundColor: "#333" }}
          >
            <Col lg={8} className="pb-2">
              <Slider {...slickSettings2}>
                {moviesData.map((movie, index) => (
                  <div key={index}>
                    <Link to={`/entertainment/movies/${movie.id}`}>
                      <img
                        src={movie.image}
                        className="img-fluid p-2"
                        alt="..."
                      />
                    </Link>
                  </div>
                ))}
              </Slider>
            </Col>
            <Col className="" lg={3}>
              <div className="py-2">
                <Image
                  className="mx-auto d-block my-2 border"
                  src="https://tpc.googlesyndication.com/simgad/584524984796833078"
                  fluid
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Entertainment;
