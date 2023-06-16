import React from 'react'

function index() {
  return (
    <div>YES!!!</div>
  )
}

export default index


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

On the form page i should be able to input the name of the medication, dosage, whether it's a daily or weekly
schedule, and the time I need to take it.'

'When I click on the 'Finalise medication' button, this should update the initial medication page with new information.'

***

- Create a medication array useState, that contains medication objects:
- Dosage amounts (integer)
- Name (String)
- Times (?)
- Dosage schedule is an array of strings 

*/