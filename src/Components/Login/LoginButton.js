import React, { useEffect } from 'react'
import useHistory from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const history = useHistory()

  useEffect(() => {
    if (isAuthenticated) {
      // User is logged in, redirect to dashboard
      history.push('/dashboard')
    }
  }, [isAuthenticated, history])

  return (
    !isAuthenticated && (
      <div>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <br></br>
        <button onClick={() => loginWithRedirect()}>Sign In</button>
      </div>
    )
  )
}

export default LoginButton
