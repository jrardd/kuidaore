import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import './styles/About.css';
import cake from '../assets/aboutPage/about-img.png';

const AboutTitle = () => {
  return (
    <Container className="about-title-container">
      <Row className="about-title mt-1">
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>
            <strong>
              h e r e ' s{`   `}a{`   `}l i t t l e{`   `}a b o u t{`   `}u s
            </strong>
          </h1>
          <h4>
            "Kuidaore" is a Japanese word that roughly translates to 'ruin
            oneself [go bankrupt] by extravagant spending on food' or, in
            simpler terms, to 'eat until you drop'.
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

const AboutText = () => {
  return (
    <Container className="about-container">
      <Row>
        <Col
          className="about-img offset-sm"
          xs="12"
          sm="6"
          md="6"
          lg="6"
          xl="6"
        >
          <Media className="cake" src={cake} />
        </Col>
        <Col className="about-text" xs="12" sm="6" md="6" lg="6" xl="6">
          <h5>
            we were started by two best friends who met and realized they had
            two things in common: their love of pastry and their love of
            building things. on a trip to japan, they came across a multitude of
            different dining experiences and decided that they wanted to take it
            home with them. after two years, a lot of hard work, research and
            development, kuidaore was born. we're excited to bring our
            experiences to you and hope you enjoy your time with us as much as
            we enjoy creating these culinary adventures for you.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

const About = () => {
  return (
    <div className="about-component">
      <AboutTitle />
      <AboutText />
    </div>
  );
};

export default About;
