import React from 'react';
import './Button.css';
import thumbnail from './image_icon.png'

const TimeCapsuleButton = () => {
  return (
    <button className="section-button">
      <img src= {thumbnail} alt="Button Icon" className="button-icon" />
      Time Capsule
    </button>
  );
};

export default TimeCapsuleButton;
