import React from 'react'
//import './EventCard.css'

// The EventCard component takes in props from the FriendsAndFamily component. It then renders the data below. The data is passed in from the FriendsAndFamily component and a new card rendered for each person in the array.

function EventCard({ id, eventName, dateOfEvent, eventTime, handleDelete }) {
  return (
    <>
      <div className="event-container">
        <div className="event-card">
          <p>Event Name: {eventName} </p>
          <p>Event Date: {dateOfEvent}</p>
          <p>Time: {eventTime}</p>
        </div>
        <button
          className="delete-button-event"
          onClick={() => handleDelete(id)}
        >
          {' '}
          DELETE{' '}
        </button>
      </div>
    </>
  )
}

export default EventCard
