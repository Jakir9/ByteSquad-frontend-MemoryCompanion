import "./styles.css";
import logo from "./header_logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header>
        <button>burger bar</button>
        <Link to="/">
          <div className="title">
            <img src={logo} alt="logo" className="logo"></img>
            Memory Companion{" "}
          </div>{" "}
        </Link>
        <button className="logout-button">Log Out</button>
      </header>
    </div>
  );
}

export default NavBar;
