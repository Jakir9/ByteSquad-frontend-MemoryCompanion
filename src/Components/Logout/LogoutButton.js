import React from 'react'
import "./styles.css";
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LogoutButton = ({id}) => {
  const { logout, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  const handleLogout = () => {
    // Prompt the user for confirmation before logging out
    const confirmLogout = window.confirm('Are you sure you want to log out?')
    if (confirmLogout) {
      logout({ returnTo: `${window.location.origin}/login` }).catch((error) => {
        // Handle logout error
        console.error('Logout error:', error)
        // Display an error message to the user
        alert('An error occurred during logout. Please try again.')
      })
      // Redirect the user to the /login route immediately after initiating logout
      navigate('/login')
    }
  }

  //If not authticated, returns a ogin/Sign Up button instead

  if (!isAuthenticated) {
    return (<div className='nav-padder'></div>) // Return null to render nothing when the user is not authenticated
  }

  return (
    isAuthenticated && (
      <div className='logout-button-container'>
        <button
          onClick={handleLogout}
          aria-label="Log out"
          className="navbar-logout-button"
          id={id}
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            style={{ color: "#faf8f6" }}
          />
          Log out
        </button>
      </div>
    )
  );
}

export default LogoutButton
