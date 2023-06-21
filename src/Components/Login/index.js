import React, { Component } from 'react'
import styles from './styles.css'
import LoginButton from './LoginButton'

import logo from './Memory Companion Logo V2.png'

import Dashboard from '../Dashboard/index.js'
import isLoggedIn from './LoginButton'


//create a login landing page

function Login() {
  // if (isLoggedIn) {
  //   return <Dashboard />
  // }
  return (

  <>
    <div className='container'>
      <img src={logo} alt='logo' className='logo-login' />
      <p className='login-text'>Welcome to Memory Companion, the user-friendly app designed to support individuals with memory-related conditions like Dementia.
      <br></br>
      <br></br>
      Easily store your memories, access visual and audio prompts, and receive daily activity reminders. Let us be your trusted companion on this journey of preserving and cherishing memories.</p>

    <>

      <LoginButton />
    </div>
     
  </>
  )
}
export default Login
