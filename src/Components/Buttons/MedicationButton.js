import React from 'react';
import './Button.css';
import thumbnail from './medication_icon.png'
import { Link } from 'react-router-dom'

const MedicationButton = () => {
  return (
    <Link to= "/medication"> 
    <button className="section-button">
    <img src= {thumbnail} alt="Button Icon" className="button-icon" />
     Medication
    </button>
    </Link>
  );
};

export default MedicationButton;
