import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../assets/styles/styles.scss";

const Header = () => {
  return (
    <>
      <Container className="header-container">
        <Row className="header-row">
          <Col className="header-name">
            <h1>Tito Satrio</h1>
          </Col>
          <Container className="header-action">
            <Col className="header-about">
              <p>About Me</p>
            </Col>
            <Col className="header-contact">
              <p>Contact</p>
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
