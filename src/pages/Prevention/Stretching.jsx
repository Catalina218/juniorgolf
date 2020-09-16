import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { storage } from '../../firebase';
import { stretchingArray } from '../../assets/PreventionText';
import '../../styles/Stretching.css';

const Stretching = () => {
  const [itemUrls, setItemUrls] = useState([]);
  const [typeArray, setTypeArray] = useState([]);
  const storageRef = storage.ref();

  const getItemUrls = async () => {
    const itemRefs = await storageRef.child('prevention/stretching').listAll();
    const itemNames = itemRefs.items.map(item => item.location.path);
    const tempArray = itemNames.map(item => item.split(".")[1] === "mp4");
    setTypeArray(tempArray);
    const urlPromises = itemNames.map(name => {
      return storageRef.child(name).getDownloadURL();
    });
    Promise.all(urlPromises).then(values => {
      setItemUrls(values);
    });
  }

  useEffect(() => {
    getItemUrls();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="stretching-block">
      <h1>Stretching</h1>
      <Container>
        <Row>
          {
            itemUrls.map((url, index) => {
              if (typeArray[index]) {
                return (
                  <Col className="player-wrapper" xs="12" md="6" lg="4" >
                    <ReactPlayer 
                      url={url}
                      controls
                      className="stretching-videoplayer"
                      width="100%"
                      height="80%"
                    />
                    <div className="stretching-title">
                      {stretchingArray[index]}
                    </div>
                  </Col>
                )
              } else {
                return (
                  <Col className="stretching-image-wrapper" xs="12" md="6" lg="4">
                    <Image 
                      src={url}
                      className="stretching-image"
                      width="100%"
                      height="80%"
                    />
                    <div className="stretching-title">
                      {stretchingArray[index]}
                    </div>
                  </Col>
                )
              }
            })
          }
        </Row> 
      </Container>
    </div>
  )
}

export default Stretching;
