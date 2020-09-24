import React, { useState, useEffect } from 'react';
import { Card, Container, Image, Spinner } from 'react-bootstrap';
import clinicsText from '../../assets/ClinicsText';
import '../../styles/Clinics.css';
import { storage } from '../../firebase';

const Clinics = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const storageRef = storage.ref();

  const getImageUrl = async () => {
    const imageRefs = await storageRef.child('clinics').listAll();
    const imageNames = imageRefs.items.map(item => item.location.path);
    const urlPromises = imageNames.map(name => {
      return storageRef.child(name).getDownloadURL();
    });
    Promise.all(urlPromises).then(values => {
      setImageUrls(values);
    });
  }

  useEffect(() => {
    getImageUrl();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="clinic">
      <Container>
        <Card className="clinics-card">
          <Card.Body>
            <Card.Text>
              {clinicsText}
            </Card.Text>
            <Card.Link href="https://forms.gle/CbzV8X64AJ5TApDGA">https://forms.gle/CbzV8X64AJ5TApDGA</Card.Link>
            <Card.Text />
            <Card.Text>
              If you are interested in participating in our online injury-prevention Zoom workouts, please email us at 
              <Card.Link href="mailto:m.chang1227@gmail.com"> m.chang1227@gmail.com</Card.Link>
            </Card.Text>
            <Card.Text />
            <Card.Text>
              Please email
              <Card.Link href="mailto:m.chang1227@gmail.com"> m.chang1227@gmail.com </Card.Link>
               if you have any questions or concerns!
            </Card.Text>
          </Card.Body>
          {
          imageUrls.length > 0 ?
            <div>
            {
              imageUrls.map((imageUrl, index) => {
                return (
                  <Image
                    key={index}
                    src={imageUrl}
                    width="100%"
                    className="clinics-image" 
                  /> 
                )
              })
            }
            </div> :
            <div className="clinics-spinner">
              <Spinner animation="border" role="status" >
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          }
        </Card>
      </Container>
    </div>
  )
}

export default Clinics;
