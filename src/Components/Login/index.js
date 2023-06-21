import React, { Component } from 'react'
import LoginButton from './LoginButton'
import Dashboard from '../Dashboard/index.js'
import isLoggedIn from './LoginButton'

//create a login landing page

function Login() {
  // if (isLoggedIn) {
  //   return <Dashboard />
  // }
  return (
    <>
      <h1>Login Page Test - login </h1>
      <LoginButton />
    </>
  )
}
export default Login
