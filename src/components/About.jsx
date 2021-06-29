import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';

const About = () => {
  return (
    <Container className="about-container">
      <Row>
        <Col className="about-img"></Col>
      </Row>
      <Row>
        <Col className="about-text"></Col>
      </Row>
    </Container>
  );
};

export default About;
