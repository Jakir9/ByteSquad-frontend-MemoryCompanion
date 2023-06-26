import React from 'react'
import './EventCard.css'

// The EventCard component takes in props from the FriendsAndFamily component. It then renders the data below. The data is passed in from the FriendsAndFamily component and a new card rendered for each person in the array.

function EventCard({ id, eventName, dateOfEvent, eventTime, handleDelete }) {
  return (
    <>
      <div className="event-container">
        
        <table className='event-table'>
          <td className="first-cell">{dateOfEvent}</td>
          <td className="second-cell">{eventTime}</td>
          <td className="third-cell">{eventName} </td>
          <td className="fourth-cell">
            <button
          className="delete-button-event"
          onClick={() => handleDelete(id)}
        >
          {' '}
          DELETE{' '}
          </button>
        </td>
        </table>
        </div>
    
    </>
  )
}

export default EventCard
