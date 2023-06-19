import React from 'react'

// create a form to add new medication
// form should have input fields for name, dosage, schedule, dosage time
// name should be a text input
// dosage should be a number input
// schedule should be a dropdown
// dosage time should be a time input
// create a button to submit the form
// create a function to handle the form submission
// stop form from refreshing page when submitted

function MedicationForm({ addMedication, handleSave }) {
  // create object using form data
  const handleSubmit = (event) => {
    event.preventDefault() // Prevents the form from refreshing the page
    // newMedication is used to populate new object with form data
    let newMedication = {
      name: event.target.name.value,
      dosage: event.target.dosage.value,
      schedule: event.target.schedule.value,
      time: event.target.time.value,
    }
    addMedication(newMedication)

    handleSave()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Dosage:
          <input type="number" name="dosage" />
        </label>
        <label>
          Schedule:
          <select name="schedule">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
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
