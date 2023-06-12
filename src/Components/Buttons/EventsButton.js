import React from 'react';
import './Button.css';
import thumbnail from './calendar_icon.png'

const EventsButton = () => {
  return (
    <button className="section-button">
      <img src= {thumbnail} alt="Button Icon" className="button-icon" />
      Events
    </button>
  );
};

export default EventsButton;
