import React, { Component, useState } from 'react'
import './styles.css'

function MedicationList({ name, dosageAmount, schedule, dosageTime, checked }) {
  return (  
   

      <tr>
      <td>{name}</td>
      <td>{dosageAmount}</td>
      <td>{dosageTime}</td>
      <td><input type="checkbox" setChecked={checked} onChange={() => !checked} /></td>
      </tr>
       

      


    
    


      // <ul className="medList">
      //   <li>{name} </li>
      //   <li>{dosageAmount} </li>
      //   <li className='time-column'>{dosageTime} </li>
      //   {/* <li>{dosageTime[1]} </li>
      //   <li>{dosageTime[2]} </li> */}

      //   <input type="checkbox" setChecked={checked} onChange={() => !checked} />
      // </ul>
  )
}

export default MedicationList
