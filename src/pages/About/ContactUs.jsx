import React from 'react';
import { Card } from 'react-bootstrap';
import { contactTextArray } from '../../assets/AboutText';
import '../../styles/About.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Card className="about-card">
          <Card.Body>
            {
              contactTextArray.map((text, index) => {
                return (
                  <Card.Text key={index}>
                    {text}
                  </Card.Text>
                )
              })
            }
          </Card.Body>
        </Card>
    </div>
  );
}

export default ContactUs;
