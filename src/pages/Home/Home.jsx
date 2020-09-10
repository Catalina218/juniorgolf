import React, { useState, useEffect } from 'react';
import { Carousel, Card, Container, Row, Col, Image } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import { storage } from '../../firebase';
import '../../styles/Home.css';

const Home = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [homeVideoUrl, setHomeVideoUrl] = useState("");
  const storageRef = storage.ref();

  const getImageUrl = async () => {
    const imageRefs = await storageRef.child('images').listAll();
    const imageNames = imageRefs.items.map(item => item.location.path);
    const urlPromises = imageNames.map(name => {
      return storageRef.child(name).getDownloadURL();
    });
    Promise.all(urlPromises).then(values => {
      setImageUrls(values);
    });
  }

  const getHomeVideo = async () => {
    const videoRefs = await storageRef.child('videos').listAll();
    const videoName = videoRefs.items[0].location.path;
    const videoUrl = await storageRef.child(videoName).getDownloadURL();
    setHomeVideoUrl(videoUrl);
  }

  useEffect(() => {
    getImageUrl();
    getHomeVideo();
    // eslint-disable-next-line
  }, []);

  const leftArrow = <div className="carousel-arrow"><i class="fas fa-angle-left fa-5x" /></div>;
  const rightArrow = <div className="carousel-arrow"><i class="fas fa-angle-right fa-5x" /></div>;

  console.log(homeVideoUrl);
  return (
    <div>
      <Carousel nextIcon={rightArrow} prevIcon={leftArrow}>
        {
          imageUrls.map((imageUrl, index) => {
            return (
              <Carousel.Item interval={1000} key={index}>
                <img
                  id="carousel-image"
                  className="w-100"
                  src={imageUrl}
                  alt="First slide"
                  height="300"
                />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
      <div className="card-video">
        <Card style={{ width: '50rem' }} className="card">
          <Card.Body>
            <Card.Title className="card-title">Message</Card.Title>
            <Card.Text>
            Founder’s Message My name is Michael Chang, and I am the founder of this organization.
            </Card.Text>
          </Card.Body>
        </Card>
        <ReactPlayer 
          url={homeVideoUrl}
          playing
          controls={true}
          className="video-player"
        />
      </div>

      <Card>
        <Card.Body>
          <Card.Title style={{ border: "1px solid black" }}>Teaching Environment</Card.Title>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
              </Col>
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
