import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { aboutTextArray } from '../../assets/AboutText';
import '../../styles/About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Container>
      <Card className="about-card">
          <Card.Body>
            {
              aboutTextArray.map((text, index) => {
                return (
                  <Card.Text key={index}>
                    {text}
                  </Card.Text>
                )
              })
            }
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default AboutUs;
