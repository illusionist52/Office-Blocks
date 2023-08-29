import { Link, NavLink } from "react-router-dom";
import "../index.css"
import "../pages/Homepage.css"
import Logo from "./Logo";
import Button from "./Button";
import LinkButton from "./LinkButton";
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
    <LinkButton to={"/signup"} style={"btn primary-btn"}>Sign up</LinkButton>
    <LinkButton to={"/login"} style={"btn secondary-btn"}>Log in</LinkButton>
  </nav>
}

export default Nav;