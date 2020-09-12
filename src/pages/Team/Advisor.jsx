import React, { useState, useEffect } from 'react';
import { Media } from 'react-bootstrap';
import { storage } from '../../firebase';
import { advisorTextArray } from '../../assets/TeamText';
import '../../styles/Team.css';

const Advisor = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const storageRef = storage.ref();

  const getImageUrls = async () => {
    const imageRefs = await storageRef.child('advisor').listAll();
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

  return (
    <div className="coach-section">
      <ul className="list-inline">
      {
        imageUrls.map((imageUrl, index) => {
          return (
            <Media as="li" key={index} className="coach-media">
              <img
                width={400}
                height={400}
                className="mr-3 coach-image"
                src={imageUrl}
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>{advisorTextArray[index].title}</h5>
                <p>{advisorTextArray[index].text}</p>
              </Media.Body>
            </Media>
          )
        })
      }
      </ul>
    </div>
  )
}

export default Advisor;
