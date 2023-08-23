import { Link, NavLink } from "react-router-dom";
import "../index.css"
import "../homepage.css"
import Logo from "./Logo";
function Nav(){
  return <nav className="nav">
    <Logo/>
    <ul>
      <li>
        <NavLink to="/rent">Rent</NavLink>
      </li>
      <li>
      <NavLink to="/buy">Buy</NavLink>
      </li>
      <li>
      <NavLink to="/manage">Manage property</NavLink>
      </li>
      <li>
      <NavLink to="/resources">Resources</NavLink>
      </li>
    </ul>
    <button className="btn primary-btn">Log in</button>
    <button className="btn secondary-btn">Sign up</button>
  </nav>
}

export default Nav;