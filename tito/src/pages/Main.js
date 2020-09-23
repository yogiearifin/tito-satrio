import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/styles/styles.scss";

const Main = () => {
  return (
    <React.Fragment>
      <Container className="main-container">
        <Row className="main-row">
          <Col className="main-title">
            <h1>Tito Satrio</h1>
            <h3>A Proactive Generalist HR and an Expectation Blower</h3>
          </Col>
        </Row>
        <Row className="main-row-second">
          <Col className="main-content">
            <h1>Hi, I'm Tito Satrio.</h1>
            <p>
              An English Literature bachelor with 3+ years of experience in
              Human Resource. I have a passion in human psychology and I love
              strategizing to tackle problems head-on.
            </p>
          </Col>
          <Col className="main-img">
            <img src={require("../assets/images/tito.jpg")} alt="Tito" />
          </Col>
        </Row>
        <Row className="main-row-third">
          <Col id="about-me">
            <h1>About Me</h1>I manage day to day HR operation in PT. Bukit
            Makmur Istindo Nikeltama
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Main;
