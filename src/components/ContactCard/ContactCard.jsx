import React from 'react';
import { Card } from 'react-bootstrap';

const ContactCard = () => {
  const infoArray = [
    "Add:",
    "Tel：Michael Chang : 206-566-9216",
    "Mail： m.chang1227@gmail.com",
    "Web：juniorgolf4fun.org"
  ];
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            CONTACT INFORMATION
          </Card.Title>
          {
            infoArray.map((info, index) => {
              return (
                <Card.Text key={index}>
                  {info}
                </Card.Text>
              )
            })
          }
        </Card.Body>
      </Card>
    </div>
  )
}

export default ContactCard;
