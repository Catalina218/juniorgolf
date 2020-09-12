import React, { useState, useEffect } from 'react';
import { Carousel, Card, Container, Row, Col, Image } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { storage } from '../../firebase';
import { textArray } from '../../assets/HomeText';
import '../../styles/Home.css';
import Gallery from '../../components/Gallery/Gallery';

const Home = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [homeVideoUrls, setHomeVideoUrl] = useState([]);
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
    const videoRefs = await storageRef.child('videos/Home').listAll();
    const videoNames = videoRefs.items.map(item => item.location.path);
    const urlPromises = videoNames.map(name => {
      return storageRef.child(name).getDownloadURL();
    })
    Promise.all(urlPromises).then(values => {
      setHomeVideoUrl(values);
    });
  }

  useEffect(() => {
    getImageUrl();
    getHomeVideo();
    // eslint-disable-next-line
  }, []);

  const leftArrow = <div className="carousel-arrow"><i class="fas fa-angle-left fa-5x" /></div>;
  const rightArrow = <div className="carousel-arrow"><i class="fas fa-angle-right fa-5x" /></div>;

  return (
    <div>
      <Carousel nextIcon={rightArrow} prevIcon={leftArrow}>
        {
          imageUrls.map((imageUrl, index) => {
            return (
              <Carousel.Item interval={1000} key={index}>
                <img
                  id="carousel-image"
                  src={imageUrl}
                  alt="First slide"
                />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
      <div className="card-video">
        <Card className="home-card">
          <Card.Body>
            <Card.Title className="card-title">Message</Card.Title>
            {
              textArray.map((text, index) => {
                return (
                  <Card.Text key={index}>
                    {text}
                  </Card.Text>
                )
              })
            }
          </Card.Body>
        </Card>
        <div className="video-section">
          {
            homeVideoUrls.map((homeVideoUrl, index) => {
              return (
                <ReactPlayer 
                  url={homeVideoUrl}
                  playing
                  controls={true}
                  className="video-player"
                />
              )
            })
          }
        </div>
      </div>
      <Gallery/>
    </div>
  );
}

export default Home;
