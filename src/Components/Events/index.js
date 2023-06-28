import React from 'react';
import { useState, useEffect } from 'react';
import EventCard from '../Card/EventCard';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';
import './styles.css';

const URL = "http://localhost:3002/api/events/"

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

//useEffect bellow is used to call the fetch event list function when component is mounted

useEffect (() => {
  fetchEventsList();
}, []);

// || GET METHOD || //
  // The fetchEventsList async function is used to fetch the list of events from the server.
  // This can be called when the component is mounted, or when a new event is added
async function fetchEventsList() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log(`This is the data`, data);
    setEventsList(Array.isArray(data.payload) ? data.payload : []);
    console.log(`This is the data.payload`, data.payload);
  } catch (error) {
    console.error("Error fetching data:", error);
    setEventsList([]);
  }
}

// || POST METHOD || //
  // The below function is called when a new event is created (form submitted).
  // It creates a new object for the new event, and then sends a POST request to the server to add the new event to the database.
  // Once the event is added, the event list is updated to include the new event.
  // If there is an error, it will be logged to the console.
  // The form is then reset, and the addEvent state is set to false, so that the list of events is shown again and the form disappears.
  async function handleSubmit(event) {
    event.preventDefault();
    const newEvent = {
      user_id: 1,
      event_name: eventName,
      event_date: dateOfEvent,
      event_time: eventTime,
    };
 try{
  const response= await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
 });

 if (response.ok) {
  // Handle successful response
  console.log("Event added successfully!");

  // Update the events list in your UI if needed
  const data = await response.json();
  setEventsList([...eventsList, data]);
  fetchEventsList();
} else {
  // Handle error
  throw new Error("Failed to add event");
}
} catch (error) {
// Handle error
console.error("Error adding event:", error);
}

setEventName("");
setDateOfEvent("");
setEventTime("");
setAddEvent(false);
}

  
  function handleClick() {
    setAddEvent(true);
  }
  // Function to handle when the delete button is clicked

// || DELETE METHOD || //
  // Function to handle when the delete button is clicked

  async function handleDelete(id) {
    // Go through the array and find the person with the matching id
    // Immutably update the array without the person with the matching id


    try{ const response = await fetch(`${URL}/${id}`,{
      method: "DELETE",
      headers: { "Content-Type": "application/json" ,},
    });
    if (response.ok) {
      fetchEventsList();
      console.log("Event deleted successfully!");
    } else {
      console.log("Failed to delete event");
    }}
    catch (error) {
      console.error("Error deleting event:", error);
    }}





    // setEventsList(eventsList.filter((item) => item.id !== id));
    // console.log(eventsList);
  
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
                key={item.event_id}
                id={item.event_id}
                eventName={item.event_name}
                dateOfEvent={formatDate(item.event_date)}
                eventTime={item.event_time}
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