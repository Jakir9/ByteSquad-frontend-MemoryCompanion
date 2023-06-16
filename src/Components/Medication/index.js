import React from 'react'
import {useState} from 'react'
import MedicationForm from './MedicationForm'

function Medication() {

// hard coded some medication data to display on screen
const testInput = {

	name: 'Ibuprofen',
	dosageAmount: 2,
	schedule: 'daily',
	dosageTime: [ '8am', '5pm']
}
const [medication, setMedication] = useState ([testInput]);// useState hook to set the medication array // array of objects

function addMedication (newMedication) {
  setMedication ([...medication, newMedication]) // spread operator to add new medication to the array
  console.log(medication)
}
// const testMedication = { 'name': 'Morphine', 'dosageAmount': 1, 'schedule': 'daily', 'dosageTime': [ '8am'] } // test medication object



  return (
    <div>
    <h2>Medication</h2>
    <div>{medication[0].name}</div> {/* display medication name */}
    <div>{medication[0].dosageAmount}</div> {/* display dosage amount */}
    <div>{medication[0].schedule}</div> {/* display dosage schedule */}
    <div>{medication[0].dosageTime[0]}</div> {/* display dosage time */}
    <div>{medication[0].dosageTime[1]}</div> {/* display dosage time */}

    <MedicationForm addMedication={addMedication}/> {/* pass addMedication function as a prop to the MedicationForm component */}
    </div>
  
  )
}

export default Medication


/* PLAN

- Medication header
-Create a card as a container
- 'Your dosage today' header
- Add 'Add Medication' button - this should take the user to the next page, using a router.

****

'As a user I want to be able to access the Medication page and have displayed all my upcoming
medications.'

'I want a checkbox feature to enable me to tick off when I take my medication,
so that I know if I've missed any doses.'

'I want to be able to add new medication via the Add Medication button. Clicking on this should route me to the following form page.'

On the form page i should be able to input the name of the medication, dosage, and the frequency time I need to take it.'

'When I click on the 'Finalise medication' button, this should update the initial medication page with new information.'

***

- Create a medication array useState, that contains medication objects:
- Dosage amounts (integer)
- Name (String)
- Times (?)
- Dosage schedule is an array of strings 

*/