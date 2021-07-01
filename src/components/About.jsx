import React from "react";
import { Media, Container, Row, Col } from "reactstrap";
import Header from "./Header";
import "./styles/About.css";
import cake from "../assets/aboutPage/about-img.png";

/*
 Contains About page title and text
*/
const AboutText = () => {
  return (
    <Container>
      <div className="about-title">
        <h1 className="about-title-text">
          <strong>o u r{`   `}s t o r y</strong>
        </h1>
      </div>

      <Container className="about-container">
        <Row>
          <Col>
            <h5>
              {/* <em>
              "kuidaore" is a Japanese word that roughly translates to 'ruin
              oneself [go bankrupt] by extravagant spending on food' or, in
              simpler terms, to 'eat until you drop'.
            </em> */}
            </h5>
            <h4 className="about-text">
              We were started by two best friends who met and realized they had
              two things in common: their love of pastry and their love of
              building things. On a trip to japan, they came across a multitude
              of different dining experiences and decided that they wanted to
              take it home with them. After two years, a lot of hard work,
              research and development, Kuidaore was born. We are excited to
              bring our experiences to you and hope you enjoy your time with us
              as much as we enjoy creating these culinary adventures for you.
            </h4>
            <br />
            <h4 className="about-text">
              We believe that you can have your cake and eat it too! our
              repertoire consists of all types of pastries and baked goods, but
              we are most famous for our cakes. We believe that a cake is the
              perfect vessel for.. well, everything! We use the finest organic
              ingredients, and love to incorporate new flavors into our menu. If
              you cannot recognize some of them, that is ok! Our staff has been
              specially trained to walk you through your pastry journey. So
              please, sit down, relax and have a coffee with us!
            </h4>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

/*
 Contains Image and Text
*/
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "a b o u t",
      description: `"kuidaore" is a Japanese word that roughly translates to "ruin
      oneself [go bankrupt] by extravagant spending on food" or, in
      simpler terms, to "eat until you drop".`,
    };
  }
  render() {
    return (
      <Container className="page-body">
        <Header title={this.state.title} description={this.state.description} />
        <Container className="about-component">
          <Media className="cake" src={cake} />
          <AboutText />
        </Container>
      </Container>
    );
  }
}

export default About;
