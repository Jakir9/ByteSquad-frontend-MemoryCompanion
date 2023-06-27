import React from 'react';
import { useState, useEffect } from 'react';
import EventCard from '../Card/EventCard';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';
import './styles.css';
function Events() {
  // auth0 code
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      // User is not logged in, redirect to login page
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  // end auth0 code
  const [eventsList, setEventsList] = useState([]);
  const [addEvent, setAddEvent] = useState(false);
  const [eventName, setEventName] = useState('');
  const [dateOfEvent, setDateOfEvent] = useState('');
  const [eventTime, setEventTime] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('eventsDB.json');
        const data = await response.json();
        setEventsList(data);
      } catch (error) {
        console.error('Error fetching JSON:', error);
        setEventsList([]);
      }
    }
    fetchData();
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
    const newEvent = {
      id: eventsList.length,
      eventName: eventName,
      dateOfEvent: dateOfEvent,
      eventTime: eventTime,
    };
    setEventsList([...eventsList, newEvent]);
    setEventName('');
    setDateOfEvent('');
    setEventTime('');
    setAddEvent(false);
  }
  function handleClick() {
    setAddEvent(true);
  }
  // Function to handle when the delete button is clicked
  function handleDelete(id) {
    // Go through the array and find the person with the matching id
    // Immutably update the array without the person with the matching id
    setEventsList(eventsList.filter((item) => item.id !== id));
    console.log(eventsList);
  }
  // Function to format the date in the desired format
  function formatDate(dateString) {
    const eventDate = new Date(dateString);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    return formattedDate;
  }
  return (
    isAuthenticated && (
      <>
        <h1 className='event-header'>EVENTS</h1>
        {!addEvent && (
          <>
            {eventsList.map((item) => (
              <EventCard
                key={item.id}
                id={item.id}
                eventName={item.eventName}
                dateOfEvent={formatDate(item.dateOfEvent)}
                eventTime={item.eventTime}
                handleDelete={handleDelete}
              />
            ))}
            {/* This is what will show when we first load the page */}
            <div className="event-button-container">
            <button className="add-event-button" onClick={handleClick}>
              Add Event
            </button>
            </div>
          </>
        )}
        {addEvent && (
          <div className="event-form-container">
            <form className="event-form" onSubmit={handleSubmit}>
              <label>
                Name of event:
                <input
                  type="text"
                  value={eventName}
                  onChange={(event) => setEventName(event.target.value)}
                  placeholder="eventName"
                  required
                />
              </label>
              <br />
              <label>
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
              <br />
              <label>
                Time:
                <input
                  type="time"
                  label="Time: "
                  value={eventTime}
                  onChange={(event) => setEventTime(event.target.value)}
                  placeholder="eventTime"
                />
              </label>
              <br />
              <button type="submit" className="save-button">
                Save
              </button>
            </form>
          </div>
        )}
      </>
    )
  );
}
export default Events;