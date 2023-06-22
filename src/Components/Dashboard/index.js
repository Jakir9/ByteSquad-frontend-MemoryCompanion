import React from 'react'
import './styles.css'
import ProfilePic from './profile_pic.png'
import TimeCapsuleButton from '../Buttons/TimeCapsuleButton'
import FriendsFamilyButton from '../Buttons/Friends&FamilyButton'
import EventsButton from '../Buttons/EventsButton'
import MedicationButton from '../Buttons/MedicationButton'
import Profile from '../Profile/Profile'

function Dashboard() {
  return (
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
}

export default Dashboard
