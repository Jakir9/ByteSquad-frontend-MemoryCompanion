import React from 'react';
import './Button.css';
import thumbnail from './family_icon.png'
import { Link } from 'react-router-dom';

const FriendsFamilyButton = () => {
  return (
    <button className="section-button">
      <img src= {thumbnail} alt="Button Icon" className="button-icon" />
      <Link to="/friends&family">Friends and Family</Link>
    </button>
  );
};

export default FriendsFamilyButton;
