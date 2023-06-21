import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from './styles.css'

export var isLoggedIn

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  isLoggedIn = isAuthenticated

  return (

     !isAuthenticated && (
    
    <div className='login-buttons'>
  <button onClick={() => loginWithRedirect()}>LOG IN</button>
  <button onClick={() => loginWithRedirect()}>SIGN UP</button>
  </div>
 
    )

  )
}

export default LoginButton
