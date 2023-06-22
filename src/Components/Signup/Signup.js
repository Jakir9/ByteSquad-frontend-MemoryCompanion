import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './styles.css'

const SignupButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      // User is logged in, redirect to dashboard
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => loginWithRedirect()}>Sign Up</button>
      </div>
    )
  }
}

export default SignupButton
