import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/styles/styles.scss";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <Container className="footer-container">
        <Row className="footer-row">
          <Col className="footer-col">
            <h1>Find Me</h1>
          </Col>
          <Col className="footer-icons">
          <h1>
            <a href="https://www.linkedin.com/in/tito-satrio-hrgeneralist/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          </a>
          <HiMail />
          </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
