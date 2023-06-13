import "./App.css";
import '../../fonts.css';
import Dashboard from "../Dashboard";
import NavBar from "../NavBar";
import FriendsAndFamily from "../FriendsAndFamily";
import Medication from "../Medication"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/friends&family" element={<FriendsAndFamily />}></Route>
        <Route path="/medication" element={<Medication />}></Route>
      </Routes>
      <footer>ByteSquad</footer>
      </div>
    </Router>
  );
}

export default App;
