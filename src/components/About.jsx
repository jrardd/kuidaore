import React from "react";
import { Media, Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <Container className="about-container">
      <h1>This is the About Page</h1>
      <Row>
        <Col className="about-img ">About Image is here</Col>
      </Row>
      <Row>
        <Col className="about-text">About text is here</Col>
      </Row>
    </Container>
  );
};

export default About;
