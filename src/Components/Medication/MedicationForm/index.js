import React from 'react'
import './styles.css'

function MedicationForm({ handleSubmit }) {
  return (
    <div className="medication-form-container">
      <form onSubmit={handleSubmit} className='medication-form'>
      
        <label className="">
          Name:
          <input type="text" name="name" placeholder='Medication Name'/>
        </label>
        <label>
          Dosage:
          <input type="number" name="dosage" placeholder='Dosage Amount'/>
        </label>
       
        <label>
          Time:
          <input type="time" name="time" />
        </label>
     
        <input className="submit-med-button" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default MedicationForm
