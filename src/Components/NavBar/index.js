import "./styles.css"
import logo from "./header_logo.png"

function NavBar (){
    return (
    <div>
    <header>
    <button>burger bar</button>
<div className="title"><img src= {logo} alt = "logo"  className="logo"></img>
Memory Companion </div>
<button className= "logout-button">Log Out</button>
    </header>
    </div>
    )
}

export default NavBar