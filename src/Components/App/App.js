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
import LogoutButton from '../Login/LogoutButton'

function PrivateRoute({ element, ...rest }) {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" replace />
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/friends&family"
            element={
              <PrivateRoute>
                <FriendsAndFamily />
              </PrivateRoute>
            }
          />
          <Route
            path="/medication"
            element={
              <PrivateRoute>
                <Medication />
              </PrivateRoute>
            }
          />
          <Route
            path="/events"
            element={
              <PrivateRoute>
                <Events />
              </PrivateRoute>
            }
          />
          <Route
            path="/timecapsule"
            element={
              <PrivateRoute>
                <TimeCapsule />
              </PrivateRoute>
            }
          />
        </Routes>
        <LogoutButton />
        <footer></footer>
      </div>
    </Router>
  )
}

export default App
