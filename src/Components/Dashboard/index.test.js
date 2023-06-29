import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Dashboard from './index'
import Profile from '../Profile/Profile'
import page from 'page'

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest.fn(),
}))

describe('Dashboard', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({ isAuthenticated: true })
  })

  it('renders profile picture', () => {
    render(
      <Router>
        <Dashboard />
      </Router>
    )
    expect(screen.getByAltText('Profile Image')).toBeInTheDocument()
  })

  it('renders the welcome message', () => {
    render(
      <Router>
        <Dashboard />
        <Profile />
      </Router>
    )
    //   expect(screen.getByClassName('profile-pic-section')).toBeInTheDocument()
    //expect(screen.getByClassName('profile-pic-section')).toBeInTheDocument()
    expect(
      page.getByRole('heading', { name: /Welcome, /i })
    ).toBeInTheDocument()
  })

  //   it('renders all the buttons', () => {
  //     render(
  //       <Router>
  //         <Dashboard />
  //       </Router>
  //     )
  //     expect(screen.getByTestId('timecapsule-button')).toBeInTheDocument()
  //     expect(screen.getByTestId('medication-button')).toBeInTheDocument()
  //     expect(screen.getByTestId('friendsfamily-button')).toBeInTheDocument()
  //     expect(screen.getByTestId('events-button')).toBeInTheDocument()
  //   })

  //   it('redirects to login page if not authenticated', () => {
  //     useAuth0.mockReturnValue({ isAuthenticated: false })
  //     const mockNavigate = jest.fn()
  //     render(
  //       <Router>
  //         <Dashboard />
  //       </Router>
  //     )
  //     expect(mockNavigate).toHaveBeenCalledWith('/login')
  //   })
})
