import './styles/Hours.css';
import React from 'react';
import Header from './Header';
import { Media, Container, Row, Col } from 'reactstrap';
import top from '../assets/hoursPage/espress-hourstop.png';
import bottom from '../assets/hoursPage/bread-hoursbottom.png';
import map from '../assets/hoursPage/map.png';
import address from '../assets/hoursPage/address.png';

const HourAddress = () => {
  return (
    <div className="hours-address">
      <Row>
        <h2 className="hours-title">
          <strong>h o u r s</strong>
        </h2>
        <Col className="hours-text">
          <ul>
            <li>s u n d a y : 6:00AM - 3:00PM</li>
            <li>m o n d a y : 7:00AM - 3:00PM</li>
            <li>t u e s d a y : 7:00AM - 3:00PM</li>
            <li>w e d n e s d a y : 7:00AM - 3:00PM</li>
            <li>t h u r s d a y : 7:00AM - 3:00PM</li>
            <li>f r i d a y : 7:00AM - 3:00PM</li>
            <li>s a t u r d a y : 7:00AM - 3:00PM</li>
          </ul>
        </Col>
      </Row>
      <div className="location">
        <h2 class="location-title">
          <strong>
            w h e r e{`   `}t o{`   `}f i n d{`   `}u s
          </strong>
        </h2>
        <Row className="address-imgs">
          <Col className="hours-map" xs="12" sm="6" md="6" lg="6" xl="6">
            <Media className="map" src={map} />
          </Col>
          <Col className="hours-address" xs="12" sm="6" md="6" lg="6" xl="6">
            <Media className="address" src={address} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const HoursImages = () => {
  return (
    <div className="img-fluid hours-imgs">
      <div className="hours-bottom">
        <Media className="bottom" src={top} alt="espresso machines" />
      </div>
      <div className="hours-top">
        <Media className="top" src={bottom} alt="bread shelf" />
      </div>
    </div>
  );
};

class Hours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'h o u r s',
      description: 'this is our schedule',
    };
  }
  render() {
    return (
      <Container className="page-body">
        <Header title={this.state.title} description={this.state.description} />
        <Container className="hours-container">
          <Row>
            <Col
              className="left-col-hours"
              xs="12"
              sm="12"
              md="12"
              lg="6"
              xl="6"
            >
              <HourAddress />
            </Col>
            <Col
              className="right-col-hours"
              xs="12"
              sm="12"
              md="12"
              lg="6"
              xl="6"
            >
              <HoursImages />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
export default Hours;
