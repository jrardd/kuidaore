import './styles/Hours.css';
import React from 'react';
import { Media } from 'reactstrap';
import bottom from '../assets/hoursPage/espress-hourstop.png';
import top from '../assets/hoursPage/bread-hoursbottom.png';
import map from '../assets/hoursPage/map.png';
import address from '../assets/hoursPage/address.png';

const HourAddress = () => {
  return (
    <div className="hours-address">
      <div className="hours">
        <h2>h o u r s :</h2>
        <div className="hours-text">
          <ul>
            <li>s u n d a y : 6:00AM - 3:00PM</li>
            <li>m o n d a y : 7:00AM - 3:00PM</li>
            <li>t u e s d a y : 7:00AM - 3:00PM</li>
            <li>w e d n e s d a y : 7:00AM - 3:00PM</li>
            <li>t h u r s d a y : 7:00AM - 3:00PM</li>
            <li>f r i d a y : 7:00AM - 3:00PM</li>
            <li>s a t u r d a y : 7:00AM - 3:00PM</li>
          </ul>
        </div>
      </div>
      <div className="location">
        <h2 class="location-title">
          w h e r e{`   `}t o{`   `}f i n d{`   `}u s :
        </h2>
        <div className="map">
          <Media src={map} />
        </div>
        <div className="address">
          <Media src={address} />
        </div>
      </div>
    </div>
  );
};

const HoursImages = () => {
  return (
    <div className="hours-imgs">
      <div className="hours-bottom">
        <Media className="bottom" src={bottom} alt="espresso machines" />
      </div>
      <div className="hours-top">
        <Media className="top" src={top} alt="bread shelf" />
      </div>
    </div>
  );
};

const Hours = () => {
  return (
    <div className="hours-container">
      <div>
        <HourAddress />
      </div>
      <div>
        <HoursImages />
      </div>
    </div>
  );
};

export default Hours;
