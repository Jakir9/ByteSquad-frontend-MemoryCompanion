import React from 'react'
import chris from './chris.jpeg'
import sarah from './sarah.jpeg'

function Card({ id, name, relationship, image, DOB, age }) {
  return (
    <>
      <div className="fnf">
        <figure style={{ width: 250 }}>
          {' '}
          <button> X </button>
          <img
            style={{ height: 300, width: 200 }}
            src={image}
            alt={name}
          />{' '}
        </figure>

        <figcaption>
          {' '}
          {name}, my {relationship}, is {age} years old.{' '}
        </figcaption>
      </div>
    </>
  )
}

export default Card
