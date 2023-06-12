import React from 'react';
import './Button.css';
import thumbnail from './family_icon.png'

const FriendsFamilyButton = () => {
  return (
    <button className="section-button">
      <img src= {thumbnail} alt="Button Icon" className="button-icon" />
      Friends and Family
    </button>
  );
};

export default FriendsFamilyButton;
