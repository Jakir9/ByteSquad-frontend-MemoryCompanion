import React from "react";
import "./styles.css";
import ProfilePic from "./profile_pic.png";
import TimeCapsuleButton from "../Buttons/TimeCapsuleButton";
import FriendsFamilyButton from "../Buttons/Friends&FamilyButton";
import EventsButton from "../Buttons/EventsButton";
import MedicationButton from "../Buttons/MedicationButton";
import Profile from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//restrict access so that only logged in users can access this page

function Dashboard() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // User is logged in, redirect to dashboard
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return (
    isAuthenticated && (
      <>
        <div className="profile-pic-section">
          <img className="profile-pic" src={ProfilePic} alt="Profile Image" />
        </div>
        <div className="dashboard-message">
          {/* This <Profile/> contains user's name and welcome message*/}
          <Profile />
        </div>
        <div className="button-container">
          <TimeCapsuleButton />
          <MedicationButton />
          <FriendsFamilyButton />
          <EventsButton />
        </div>
      </>
    )
  );
}

export default Dashboard;
