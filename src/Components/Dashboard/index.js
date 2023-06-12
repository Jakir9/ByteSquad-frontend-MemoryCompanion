import React from "react";
import "./styles.css";
import ProfilePic from "./profile_pic.png";

function Dashboard() {
  return (
    <>
      {/* Note: We may need a div to wrap the whole component for styling the whole page or making it responsive */}
      <div className="profile-pic-section">
        {/* Initially image will be hardcoded, this will eventually be replaced with the logged in user's profile image */}
        <img className="profile-pic" src={ProfilePic} alt="Profile Image" />
      </div>
      <div className="dashboard-message">
        <h2>Welcome, [User's Name]</h2>
        <p> This is where we will include further information for the user</p>
      </div>
      <div className="feature-buttons">
        <button>Time Capsule</button>
        <button>Friends & Family</button>
        <button>Medication</button>
        <button>Routine</button>
      </div>
    </>
  );
}

export default Dashboard;

// Need profile image of the logged in user
// Need a paragraph with a welcome message, which references the logged in user's name
// Then 4 buttons which will navigate the user to the different pages