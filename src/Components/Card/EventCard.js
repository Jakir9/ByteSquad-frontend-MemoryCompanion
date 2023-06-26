import React from 'react'
import './EventCard.css'

// The EventCard component takes in props from the FriendsAndFamily component. It then renders the data below. The data is passed in from the FriendsAndFamily component and a new card rendered for each person in the array.

function EventCard({ id, eventName, dateOfEvent, eventTime, handleDelete }) {
  return (
    <>
      <div className="event-container">
        <div className="event-card">
        <table className='event-table'>
          <td>{dateOfEvent}</td>
          <td>{eventTime}</td>
          <td>{eventName} </td>
          <td>
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
      </div>
    </>
  )
}

export default EventCard
