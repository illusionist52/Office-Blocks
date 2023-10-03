import { Link, NavLink } from "react-router-dom";
import "../index.css"
import "../pages/Homepage.css"
import Logo from "./Logo";
import Button from "./Button";
import LinkButton from "./LinkButton";
function Nav(){
  const userData = localStorage.getItem("token");
  
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
    
    {!userData && <LinkButton to={"/signup"} style={"btn primary-btn"}>Sign up</LinkButton>}
    {!userData && <LinkButton to={"/login"} style={"btn secondary-btn"}>Log in</LinkButton>}
    {userData && <p>welcome {userData.username}</p>}
  </nav>
}

export default Nav;