import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function PrivateRoute({ element, ...rest }) {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" replace />
  )
}

export default PrivateRoute
