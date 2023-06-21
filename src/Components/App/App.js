import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import '../../fonts.css'
import Dashboard from '../Dashboard'
import NavBar from '../NavBar'
import FriendsAndFamily from '../FriendsAndFamily'
import Medication from '../Medication'
import Events from '../Events'
import TimeCapsule from '../TimeCapsule'
import Login from '../Login'
import LogoutButton from '../LogoutButton'

function App() {
  const { isAuthenticated } = useAuth0()

  const PrivateRoute = ({ element, ...rest }) => {
    return isAuthenticated ? (
      <Route {...rest} element={element} />
    ) : (
      <Navigate to="/" />
    )
  }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <PrivateRoute path="/dashboard" element={<Dashboard />} />
          <PrivateRoute path="/friends&family" element={<FriendsAndFamily />} />
          <PrivateRoute path="/medication" element={<Medication />} />
          <PrivateRoute path="/events" element={<Events />} />
          <PrivateRoute path="/timecapsule" element={<TimeCapsule />} />
        </Routes>
        <LogoutButton />
        <footer></footer>
      </div>
    </Router>
  )
}

export default App
