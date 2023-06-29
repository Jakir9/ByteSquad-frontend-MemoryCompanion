import { useEffect, useState } from 'react';
import '../../fonts.css'
import Dashboard from '../Dashboard'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import FriendsAndFamily from '../FriendsAndFamily'
import Medication from '../Medication'
import Events from '../Events'
import TimeCapsule from '../TimeCapsule'
import Login from '../Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      setShowFooter(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content-wrapper">
          <div className={`content ${showFooter ? 'with-footer' : ''}`}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/" element={<Login />}></Route>
              <Route path="/friends&family" element={<FriendsAndFamily />}></Route>
              <Route path="/medication" element={<Medication />}></Route>
              <Route path="/events" element={<Events />}></Route>
              <Route path="/timecapsule" element={<TimeCapsule />}></Route>
              <Route path="login" element={<Login />}></Route>
            </Routes>
          </div>
        </div>
        <Footer className={`footer ${showFooter ? 'show' : ''}`} />
      </div>
    </Router>
  );
}

export default App;
