import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import './styles/About.css';
import cake from '../assets/aboutPage/about-img.png';

const AboutImage = () => {
  return (
    <div className="img-fluid about-img-container">
      <Media className="cake" src={cake} />
    </div>
  );
};

const AboutText = () => {
  return (
    <Container className="about-container">
      <Row>
        <Col className="about-title">
          <h1>
            <strong>
              h e r e ' s{`   `}a{`   `}l i t t l e{`   `}a b o u t{`   `}u s !
            </strong>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="about-text">
          <h5>
            <em>
              "kuidaore" is a Japanese word that roughly translates to 'ruin
              oneself [go bankrupt] by extravagant spending on food' or, in
              simpler terms, to 'eat until you drop'.
            </em>
          </h5>
          <h3>
            we were started by two best friends who met and realized they had
            two things in common: their love of pastry and their love of
            building things. on a trip to japan, they came across a multitude of
            different dining experiences and decided that they wanted to take it
            home with them. after two years, a lot of hard work, research and
            development, kuidaore was born. we're excited to bring our
            experiences to you and hope you enjoy your time with us as much as
            we enjoy creating these culinary adventures for you.
          </h3>
          <br />
          <h3>
            we believe that you can have your cake and eat it too! our
            repertoire consists of all types of pastries and baked goods, but
            we're most famous for our cakes! we believe that a cake is the
            perfect vessel for.. well, everything! we use the finest organic
            ingredients, and love to incorporate new flavors into our menu. if
            you can't recognize some of them, that's okay! our staff has been
            specially trained to walk you through your pastry journey. so
            please, sit down, relax and have a coffee with us!
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

const About = () => {
  return (
    <Container className="about-component">
      <Row>
        <Col className="left-col-about" xs="12" sm="12" md="12" lg="6" xl="6">
          <AboutImage />
        </Col>
        <Col className="right-col-about" xs="12" sm="12" md="12" lg="6" xl="6">
          <AboutText />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
