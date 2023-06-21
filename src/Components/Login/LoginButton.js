import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    !isAuthenticated && (
      <div>
        {' '}
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <br></br>
        <button onClick={() => loginWithRedirect()}>Sign In</button>
      </div>
    )
  )
}

export default LoginButton
