import React from 'react'
import { useState, useEffect } from 'react'
import EventCard from '../Card/EventCard'

function Events() {
  const [eventsList, setEventsList] = useState([])
  const [addEvent, setAddEvent] = useState(false)
  const [eventName, setEventName] = useState('')
  const [dateOfEvent, setDateOfEvent] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('eventsDB.json')
        const data = await response.json()
        setEventsList(data)
      } catch (error) {
        console.error('Error fetching JSON:', error)
        setEventsList([])
      }
    }
    fetchData()
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    const newEvent = {
      id: eventsList.length,
      eventName: eventName,
      dateOfEvent: dateOfEvent,
      time: time,
    }
    setEventsList([...eventsList, newEvent])

    setEventName('')
    setDateOfEvent('')
    setTime('')
    setAddEvent(false)
  }

  function handleClick() {
    setAddEvent(true)
  }
  return (
    <>
      <h1>Events</h1>
      {!addEvent && ( // When addButton is not clicked, it is false, therefore the list of friends and family will be shown, which is essentially the Card component mapped over the familyAndFriendsList array to provide a card for each person.
        <>
          <h3> list of events will be here</h3>

          <EventCard />
          {/* This is what will show when we first load the page */}
          <button className="add-event-button" onClick={handleClick}>
            {' '}
            Add Event
          </button>
        </>
      )}
      {addEvent && ( // When addButton is clicked, it is true, therefore the form will be shown
        <div className="event-form">
          {/* Form logic is below - This renders the form, which contains different inputs for the different information we are capturing (e.g. name, relationship.) */}
          <form className="event-form" onSubmit={handleSubmit}>
            <label>
              {' '}
              Name of event:
              <input
                type="text"
                value={eventName}
                onChange={(event) => setEventName(event.target.value)}
                placeholder="eventName"
                required
              />
            </label>
            <br></br>
            <label>
              {' '}
              Date of Event:
              <input
                className="input-date"
                type="date"
                label="Date of Event: "
                value={dateOfEvent}
                onChange={(event) => setDateOfEvent(event.target.value)}
                placeholder="Date of Event"
                required
              />
            </label>

            <br></br>
            <label>
              {' '}
              Time:
              <input
                type="time"
                label="Time: "
                value={time}
                onChange={(event) => setTime(event.target.value)}
                placeholder="time"
              />
            </label>

            <br></br>
            <button type="submit" className="save-button">
              Save
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Events
