import React from 'react';
import './Button.css';
import thumbnail from './calendar_icon.png'
import { Link } from 'react-router-dom';

const EventsButton = () => {
  return (
    <Link to="/events">
    <button className="section-button">
      <img src= {thumbnail} alt="Button Icon" className="button-icon" />
      Events
      </button>
    </Link>
  );
};

export default EventsButton;
