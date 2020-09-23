import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../assets/styles/styles.scss";

const Header = () => {
  return (
    <>
      <Container className="header-container">
        <Row className="header-row">
          <Col className="header-name">
            <h1>TS.</h1>
          </Col>
          <Container className="header-action">
            <Col className="header-about">
              <a href="#about-me">
                <p>About Me</p>
              </a>
            </Col>
            <Col className="header-contact">
              <a href="#contact">
                <p>Contact</p>
              </a>
            </Col>
            <Col className="header-resume">
              <Button>Resume</Button>
            </Col>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default Header;
