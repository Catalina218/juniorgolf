import React from 'react';
import { Card } from 'react-bootstrap';
import { messageTextArray } from '../../assets/MessageText';
import '../../styles/Message.css';

const Message = () => {
  return (
    <div>
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
    </div>
  )
}

export default Message;
