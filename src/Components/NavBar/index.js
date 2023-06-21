import "./styles.css";
import logo from "./header_logo.png";
import { Link } from "react-router-dom";

function NavBar()
{
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <div>
      <header>
        {/* Hamburger menu icon */}
        <span onClick={openNav}>&#9776;</span>

        <div id="mySidenav" className="sidenav">
          <a href="#" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <Link to="/">Dashboard</Link>
          <Link to="/timecapsule">Time Capsule</Link>
          <Link to="/medication">Medication</Link>
          <Link to="/friends&family">Friends and Family</Link>
          <Link to="/events">Events</Link>
        </div>

        <Link to="/">
          <div className="title">
            <img src={logo} alt="logo" className="logo"></img>
            <h1> Memory Companion </h1>
          </div>{" "}
        </Link>
        <button className="logout-button">Log Out</button>
      </header>
    </div>

    /* <>
      <div id="mySidenav" className="sidenav">
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>


      <span onClick={openNav}>
        &#9776;
      </span>
    </>  */
  );
}

export default NavBar;
