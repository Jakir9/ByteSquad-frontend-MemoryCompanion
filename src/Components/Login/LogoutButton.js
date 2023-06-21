import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router-dom'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0()
  const history = useHistory()

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
      history.push('/login')
    }
  }

  return (
    isAuthenticated && (
      <button onClick={handleLogout} aria-label="Log out">
        Log out
      </button>
    )
  )
}

export default LogoutButton
