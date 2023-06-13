import React from 'react'
import chris from './chris.jpeg'
import sarah from './sarah.jpeg'

function FriendsAndFamily() {
  return (
    <>
      <div className="fnf-1">
        <figure style={{ width: 250 }}>
          {' '}
          <button style={{ display: 'flex', alignitems: 'center' }}> X </button>
          <img
            style={{ height: 300, width: 200 }}
            src={chris}
            alt="Chris"
          />{' '}
        </figure>

        <figcaption> Chris, my Grandson</figcaption>
      </div>

      <div className="fnf-2">
        {' '}
        <figure>
          {' '}
          <img
            style={{ height: 300, width: 200 }}
            src={sarah}
            alt="Sarah"
          />{' '}
        </figure>
        <figcaption> Sarah, my Granddaughter</figcaption>
      </div>
    </>
  )
}

export default FriendsAndFamily
