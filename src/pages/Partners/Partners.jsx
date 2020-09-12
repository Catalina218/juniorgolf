import React from 'react';
import { Card, Container } from 'react-bootstrap';
import '../../styles/Partners.css';

const Partners = () => {
  return (
    <div className="partner">
      <Container>
        <Card className="partners-card" >
          <Card.Body >
            <Card.Title className="partner-title">
              Coach Dave Emerick/NCJGA:
            </Card.Title>
            <Card.Text>
              Thank you to Coach Dave Emerick from the North County Junior Golf Association 
              for helping us get started and for providing us equipment and valuable support. 
              To learn more about NCJGA, visit &nbsp;
              <Card.Link href="http://www.ncjga.com/">
                http://www.ncjga.com/ .
              </Card.Link>
            </Card.Text>
            <Card.Title className="partner-title">
              Coach Johnny Gonzales/Rancho Carlsbad Golf Course:
            </Card.Title>
            <Card.Text>
              Thank you to Coach Johnny Gonzales from the Farms Golf Club and to Rancho Carlsbad 
              Golf Course for hosting our golf clinics. To learn more about the Farms Golf Club, 
              visit &nbsp;
              <Card.Link href="https://www.thefarmsgolfclub.com/">
                https://www.thefarmsgolfclub.com/ ,
              </Card.Link>
              and to learn more about the Rancho Carlsbad Golf Course, visit
              <Card.Link href="https://www.ranchocarlsbadgolf.com/">
                https://www.ranchocarlsbadgolf.com/ .
              </Card.Link>
            </Card.Text>
            <Card.Title className="partner-title">
              Dr. Michael Hollstegge:
            </Card.Title>
            <Card.Text>
              Thank you to Dr. Hollstegge from RISE Physical Therapy for his support and diligence 
              in helping us educate our students on how to prevent injuries in their golf swing. 
              To learn more about RISE Physical Therapy, visit &nbsp;
              <Card.Link href="https://www.risephysicaltherapy.com/">
                https://www.risephysicaltherapy.com/ .
              </Card.Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Partners;
