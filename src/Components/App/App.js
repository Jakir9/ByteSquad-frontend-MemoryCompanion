import './App.css'
import '../../fonts.css'
import Dashboard from '../Dashboard'
import NavBar from '../NavBar'
import FriendsAndFamily from '../FriendsAndFamily'
import Medication from '../Medication'
import Events from '../Events'
import TimeCapsule from '../TimeCapsule'
import Login from '../Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/friends&family" element={<FriendsAndFamily />}></Route>
          <Route path="/medication" element={<Medication />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/timecapsule" element={<TimeCapsule />}></Route>
          <Route path="login" element={<Login />}>
            {' '}
          </Route>
        </Routes>
        <footer></footer>
      </div>
    </Router>
  )
}

export default App
