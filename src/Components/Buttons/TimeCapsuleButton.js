import React from 'react';
import './Button.css';
import thumbnail from './Pic Thumbnail.png'

const TimeCapsuleButton = () => {
  return (
    <button className="time-capsule-button">
      <img src= {thumbnail} alt="Button Icon" className="button-icon" />
      Time Capsule
    </button>
  );
};

export default TimeCapsuleButton;
