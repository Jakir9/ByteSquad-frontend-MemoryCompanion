import React from 'react'
import { useState } from 'react'
import Card from '../Card/Card'
import chris from './chris.jpeg'
import sarah from './sarah.jpeg'
import tom from './tom.jpeg'

function FriendsAndFamily () {
  const [addButton, setAddButton] = useState(false)

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

  function handleClick () {
    setAddButton(true)
    
  }

  return (
    <>
      
    {!addButton && (
  {list.map((item) => (
    <Card
      id={item.id}
      name={item.name}
      relationship={item.relationship}
      image={item.image}
    />
  ))}

  <button style={{ display: 'flex', alignItems: 'center' }} onClick={handleClick}> Add </button>
)}   
    </>
  )
}

export default FriendsAndFamily
