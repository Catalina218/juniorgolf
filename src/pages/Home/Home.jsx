import React, { useState, useEffect } from 'react';
import { Carousel, Card, Spinner } from 'react-bootstrap';
import Gallery from '../../components/Gallery/Gallery';
import ReactPlayer from 'react-player';
import { storage } from '../../firebase';
import { textArray, imageTextArray } from '../../assets/HomeText';
import '../../styles/Home.css';
import HomeImage from '../../assets/Home.jpg';

const Home = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [homeVideoUrls, setHomeVideoUrl] = useState([]);
  const storageRef = storage.ref();

  const getImageUrl = async () => {
    const imageRefs = await storageRef.child('home').listAll();
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

  const style = {
    "background-image": `url(${HomeImage})`
  };

  return (
    <div className="home-content" style={style}>
    {
      imageUrls.length === 0 ?
      <div className="spinner-container">
        <div className="home-image-spinner">
          <Spinner animation="border" role="status" >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      </div> :
      <Carousel nextIcon={rightArrow} prevIcon={leftArrow} className="home-carousel">
        {
          imageUrls.map((imageUrl, index) => {
            return (
              <Carousel.Item interval={1000} key={index} className="home-carousel-image">
                <img
                  id="carousel-image"
                  src={imageUrl}
                  alt="First slide"
                />
                <div className="home-image-text">
                  {imageTextArray[index]}
                </div>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    }
      <div className="card-video">
        <Card className="home-card">
          <Card.Body>
            <Card.Title className="card-title">
              Junior Golf for Fun Overview
            </Card.Title>
            {
              textArray.map((text, index) => {
                return (
                  <Card.Text  className="card-text" key={index}>
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
                  width={window.screen.width >= 750 ? "640px" : "100%"}
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
