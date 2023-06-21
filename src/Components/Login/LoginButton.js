import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from './styles.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className='login-buttons'>
  <button onClick={() => loginWithRedirect()}>LOG IN</button>
  <button onClick={() => loginWithRedirect()}>SIGN UP</button>
  </div>
  )
}

export default LoginButton
