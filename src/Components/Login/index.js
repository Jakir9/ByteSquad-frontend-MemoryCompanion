import React from 'react'
import LoginButton from '../LoginButton/LoginButton'
import SignupButton from '../Signup/Signup'
import logo from './Memory Companion Logo V2.png'
import './styles.css'

//Login landing page
function Login() {
  return (
    <>
      <div className="container">
        <img src={logo} alt="logo" className="logo-login" />
        <p className="login-text">
          Welcome to Memory Companion, the user-friendly app designed to support
          individuals with memory-related conditions like Dementia.
          <br></br>
          <br></br>
          Easily store your memories, access visual and audio prompts, and
          receive daily activity reminders. Let us be your trusted companion on
          this journey of preserving and cherishing memories.
        </p>
        <div className="login-buttons">
          <LoginButton />
          <SignupButton />
        </div>
      </div>
    </>
  )
}

export default Login
