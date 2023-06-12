import React from 'react';
import './Button.css';
import thumbnail from './medication_icon.png'

const MedicationButton = () => {
  return (
    <button className="section-button">
      <img src= {thumbnail} alt="Button Icon" className="button-icon" />
      Medication
    </button>
  );
};

export default MedicationButton;
