import "./App.css";
import '../../fonts.css';
import Dashboard from "../Dashboard";
import NavBar from "../NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Dashboard />
      <footer>ByteSquad</footer>
    </div>
  );
}

export default App;
