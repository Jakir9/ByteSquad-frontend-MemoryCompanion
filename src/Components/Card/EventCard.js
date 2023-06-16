import React from 'react'
//import './EventCard.css'

// The EventCard component takes in props from the FriendsAndFamily component. It then renders the data below. The data is passed in from the FriendsAndFamily component and a new card rendered for each person in the array.

function EventCard() {
  return (
    <>
      <div className="event-container">
        <div className="event-card">
          <p>date, time and event shows here</p>
        </div>
      </div>
    </>
  )
}

export default EventCard
