import React from 'react'
import { useState } from 'react'
import Card from '../Card/Card'
import chris from './chris.jpeg'
import sarah from './sarah.jpeg'
import tom from './tom.jpeg'

function FriendsAndFamily() {
  const [addButton, setAddButton] = useState(false)
  const [relationship, setRelationship] = useState('')
  const [name, setName] = useState('')
  const [DOB, setDOB] = useState('')
  const [age, setAge] = useState(null)

  const list = [
    { id: 0, name: 'Chris', relationship: 'Grandson', image: chris },
    {
      id: 1,
      name: 'Sarah',
      relationship: 'Granddaughter',
      image: sarah,
    },
    {
      id: 2,
      name: 'Tom',
      relationship: 'Son',
      image: tom,
    },
  ]

  function handleClick() {
    setAddButton(true)
  }

  function handleSubmit(event) {
    event.preventDefault()
    // Add your logic here to handle form submission

    // Clear form fields
    setName('')
    setRelationship('')
    setAddButton(false)
  }

  return (
    <>
      {!addButton && ( // When addButton is not clicked, it is false, therefore the list of friends and family will be shown
        <>
          {list.map((item) => (
            <Card
              id={item.id}
              name={item.name}
              relationship={item.relationship}
              image={item.image}
            />
          ))}

          <button
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={handleClick}
          >
            {' '}
            Add{' '}
          </button>
        </>
      )}

      {addButton && ( // When addButton is clicked, it is true, therefore the form will be shown
        <form onSubmit={handleSubmit}>
          <label>
            {' '}
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
          </label>

          <label>
            {' '}
            Relationship:
            <input
              type="text"
              label="Relationship: "
              value={relationship}
              onChange={(event) => setRelationship(event.target.value)}
              placeholder="Relationship"
            />
          </label>

          <label>
            {' '}
            Age:
            <input
              type="number"
              label="Age: "
              value={age}
              onChange={(event) => setAge(event.target.value)}
              placeholder="age"
            />
          </label>

          <label>
            {' '}
            Date of Birth:
            <input
              type="date"
              label="Date of Birth: "
              value={DOB}
              onChange={(event) => setDOB(event.target.value)}
              placeholder="Date of Birth"
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  )
}

export default FriendsAndFamily
