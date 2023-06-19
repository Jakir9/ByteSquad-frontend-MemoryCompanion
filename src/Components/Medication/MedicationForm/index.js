import React from 'react'

function MedicationForm({ handleSubmit }) {
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
