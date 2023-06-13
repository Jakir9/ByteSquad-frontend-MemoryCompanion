import React from 'react';
import './Button.css';
import thumbnail from './family_icon.png'
import { Link } from 'react-router-dom';

const FriendsFamilyButton = () => {
  return (
    <Link to="/friends&family"> 
    <button className="section-button">
      <img src= {thumbnail} alt="Button Icon" className="button-icon" />
     Friends and Family
    </button>
    </Link>
  );
};

export default FriendsFamilyButton;
