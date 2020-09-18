import React, { useState, useEffect } from 'react';
import { Media, Card } from 'react-bootstrap';
import { storage } from '../../firebase';
import { coachTextArray } from '../../assets/TeamText';
import '../../styles/Team.css';

const Coach = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const storageRef = storage.ref();

  const getImageUrls = async () => {
    const imageRefs = await storageRef.child('coach').listAll();
    const imageNames = imageRefs.items.map(item => item.location.path);
    const urlPromises = imageNames.map(name => {
      return storageRef.child(name).getDownloadURL();
    });
    Promise.all(urlPromises).then(values => {
      setImageUrls(values);
    });
  }

  useEffect(() => {
    getImageUrls();
    // eslint-disable-next-line
  }, []);

  const renderMedia = (arr, textArr) => {
    return (
      <ul className="list-inline">
      {
        arr.map((imageUrl, index) => {
          return (
            <Media as="li" key={index} className="coach-media">
              <img
                className="mr-3 coach-image"
                src={imageUrl}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>{textArr[index].title}</h5>
                <p>{textArr[index].text}</p>
              </Media.Body>
            </Media>
          )
        })
      }
      </ul>
    );
  }

  const renderCard = (arr, textArr) => {
    return (
      <>
        {
          arr.map((imageUrl, index) => {
            return (
              <Card key={index} className="team-card">
                <Card.Img 
                  variant="top"
                  src={imageUrl}
                  className="team-card-image"
                />
                <Card.Body>
                  <Card.Title className="team-card-title">{textArr[index].title}</Card.Title>
                  <Card.Text className="team-card-text">{textArr[index].text}</Card.Text>
                </Card.Body>
              </Card>
            )
          })
        }
      </>
    )
  }

  return (
    <div className="coach-section">
      {
        window.screen.width >= 900 ?
        renderMedia(imageUrls, coachTextArray) :
        renderCard(imageUrls, coachTextArray)
      }
    </div>
  )
}

export default Coach;
