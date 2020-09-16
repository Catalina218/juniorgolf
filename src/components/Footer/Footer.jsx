import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import FooterImage from '../../assets/Home_Golf.png';
import { ReactComponent as ReactMail } from '../../assets/mail.svg';
import { ReactComponent as ReactPhone } from '../../assets/phone.svg';
import { ReactComponent as ReactWeb } from '../../assets/web.svg';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact">
        <Container className="fluid footer-container">
          <Row >
            <Col sm={6} className="left-text">
              <Row>
                <Col className="footer-title">Contact Information</Col>
              </Row>
              <Row>
                <Col className="footer-text">
                  <ReactMail className="footer-svg" />
              Email: m.chang1227@gmail.com
            </Col>
              </Row>
              <Row>
                <Col className="footer-text">
                  <ReactPhone className="footer-svg" />
              Phone: 206-566-9216
            </Col>
              </Row>
              <Row>
                <Col className="footer-text">
                  <ReactWeb className="footer-svg" />
              Web：juniorgolf4fun.org
            </Col>
              </Row>
            </Col>
            <Col sm={{offset:2,span:4}} className="right-part">
              <Image
                src={FooterImage}
                className="footer-image"
              />
            </Col>
          </Row>
        </Container>

      </div>
      <div className="copyright">
        Copyright © 2002-2017 Juniorgolf4fun.org
      </div>
    </div>
  );
}

export default Footer;
