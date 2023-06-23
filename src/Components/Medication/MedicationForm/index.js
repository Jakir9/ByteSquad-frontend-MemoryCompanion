import React from 'react'
import './styles.css'

function MedicationForm({ handleSubmit }) {
  return (
    <div className="medication-form">
      <form onSubmit={handleSubmit}>
      
        <label className="">
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Dosage:
          <input type="number" name="dosage" />
        </label>
       
        <label>
          Time:
          <input type="time" name="time" />
        </label>
     
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default MedicationForm
