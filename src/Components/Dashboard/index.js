import React from 'react'
import './styles.css'
import ProfilePic from './profile_pic.png'
import TimeCapsuleButton from '../Buttons/TimeCapsuleButton'
import FriendsFamilyButton from '../Buttons/Friends&FamilyButton'
import EventsButton from '../Buttons/EventsButton'
import MedicationButton from '../Buttons/MedicationButton'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../Login/LoginButton'
import LogoutButton from '../Login/LogoutButton'
import isLoggedIn from '../Login/LoginButton'

function Dashboard() {
  if (!isLoggedIn) {
    return (
      <>
        <h1>Login Page Test - dashboard</h1>
        <LoginButton />
      </>
    )
  }

  return (
    <>
      <div className="profile-pic-section">
        <img className="profile-pic" src={ProfilePic} alt="Profile Image" />
      </div>
      <div className="dashboard-message">
        <h2>Welcome, user name</h2>
        <p>This is where we will include further information for the user</p>
      </div>
      <div className="button-container">
        <TimeCapsuleButton />
        <MedicationButton />
        <FriendsFamilyButton />
        <EventsButton />
      </div>
      <LogoutButton />
    </>
  )
}

export default Dashboard
