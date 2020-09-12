import React from 'react';
import { Card, Container } from 'react-bootstrap';
import clinicsText from '../../assets/ClinicsText';
import '../../styles/Clinics.css';

const Clinics = () => {
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
        </Card>
      </Container>
    </div>
  )
}

export default Clinics;
