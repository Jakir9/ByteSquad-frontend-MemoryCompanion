import React, { Component, useState } from 'react'
import './styles.css'

function MedicationList({ name, dosageAmount, schedule, dosageTime, checked }) {
  return (
    <div>
      <ul className="medList">
        <li>{name} </li>
        <li>{dosageAmount} </li>
        <li>{schedule} </li>
        <li>{dosageTime} </li>
        {/* <li>{dosageTime[1]} </li>
        <li>{dosageTime[2]} </li> */}

        <input type="checkbox" setChecked={checked} onChange={() => !checked} />
      </ul>
    </div>
  )
}

export default MedicationList
