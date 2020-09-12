import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { messageTextArray } from '../../assets/MessageText';
import '../../styles/Message.css';

const Message = () => {
  return (
    <div className="message">
      <Container>
        <Card className="message-card">
          <Card.Body>
            {
              messageTextArray.map((text, index) => {
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
  )
}

export default Message;
