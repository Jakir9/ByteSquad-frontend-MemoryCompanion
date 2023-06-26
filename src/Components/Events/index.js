import { useState, useEffect, useRef } from "react";
import EventCard from "../Card/EventCard";

const URL = "http://localhost:3002/api/events/";

function Events() {
  const [eventsList, setEventsList] = useState([]);
  const [addEvent, setAddEvent] = useState(false);
  const eventNameRef = useRef("");
  const dateOfEventRef = useRef("");
  const eventTimeRef = useRef("");

  // useEffect below is used to call the fetchEventsList function when the component is mounted
  useEffect(() => {
    fetchEventsList(); // Fetch events list on component mount
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
      setEventsList(Array.isArray(data.payload) ? data.payload : []);
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
      event_name: eventNameRef.current.value,
      event_date: dateOfEventRef.current.value,
      event_time: eventTimeRef.current.value,
    };

    try {
      const response = await fetch(URL, {
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

    eventNameRef.current.value = "";
    dateOfEventRef.current.value = "";
    eventTimeRef.current.value = "";
    setAddEvent(false);
  }

  function handleClick() {
    setAddEvent(true);
  }

  // || DELETE METHOD || //
  // Function to handle when the delete button is clicked
  async function handleDelete(id) {
    // Go through the array and find the event with the matching id
    // Delete this event from the database
    // Update the events list showing on the UI (fetchEventsList again)
    try {
      const response = await fetch(`${URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // Now the event has been deleted from the database, we need to update the events list showing on the UI
        fetchEventsList();
        console.log("Event deleted successfully");
      } else {
        console.error("Failed to delete event");
      }
    } catch (error) {
      console.error("Error occurred while deleting event:", error);
    }
  }
  // This was the code we used for the front-end logic: setEventsList(eventsList.filter((item) => item.id !== id));

  return (
    <>
      <h1>Events</h1>
      {!addEvent && ( // When addButton is not clicked, it is false, therefore the list of friends and family will be shown, which is essentially the Card component mapped over the familyAndFriendsList array to provide a card for each person.
        <>
          {eventsList.map((item) => (
            <EventCard
              key={item.event_id}
              id={item.event_id}
              eventName={item.event_name}
              dateOfEvent={item.event_date}
              eventTime={item.event_time}
              handleDelete={handleDelete}
            />
          ))}

          {/* This is what will show when we first load the page */}
          <button className="add-event-button" onClick={handleClick}>
            {" "}
            Add Event
          </button>
        </>
      )}
      {addEvent && ( // When addButton is clicked, it is true, therefore the form will be shown
        <div className="event-form">
          {/* Form logic is below - This renders the form, which contains different inputs for the different information we are capturing (e.g. name, relationship.) */}
          <form className="event-form" onSubmit={handleSubmit}>
            <label>
              {" "}
              Name of event:
              <input
                type="text"
                ref={eventNameRef}
                placeholder="eventName"
                required
              />
            </label>
            <br></br>
            <label>
              {" "}
              Date of Event:
              <input
                className="input-date"
                type="date"
                label="Date of Event: "
                ref={dateOfEventRef}
                placeholder="Date of Event"
                required
              />
            </label>

            <br></br>
            <label>
              {" "}
              Time:
              <input
                type="time"
                label="Time: "
                ref={eventTimeRef}
                placeholder="eventTime"
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
  );
}

export default Events;
