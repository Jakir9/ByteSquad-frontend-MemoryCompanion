import React from 'react';
import './Button.css';
import thumbnail from './image_icon.png'
import {Link} from "react-router-dom"
const TimeCapsuleButton = () => {
  return (
    <Link to ="/timecapsule">
    <button className="section-button">
      <img src= {thumbnail} alt="Button Icon" className="button-icon" />
      Time Capsule
    </button>
    </Link>
  );
};

export default TimeCapsuleButton;
