import React from "react";
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";
import "./styles/Home.css";

const Section1 = () => {
  return (
    <Container className="section1">
      <Row>
        <Col>
          <h1>w e l c o m e</h1>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Button className="menu-btn">m e n u</Button>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <h1>
            t o{"   "}o u r{"   "}s p a c e
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

//const Section2 = () => {};

//const Section3 = () => {};

const Home = () => {
  return (
    <>
      <Jumbotron className="home-header">
        <h1 className="display-3 welcome-text">w e l c o m e</h1>
      </Jumbotron>
      <Section1 />
    </>
  );
};

export default Home;
