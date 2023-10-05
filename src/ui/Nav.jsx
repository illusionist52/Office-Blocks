import { Link, NavLink } from "react-router-dom";
import "../index.css"
import "../pages/Homepage.css"
import Logo from "./Logo";
import Button from "./Button";
import LinkButton from "./LinkButton";
import { BiSolidUser } from "react-icons/bi";
import { useState } from "react";
function Nav(){
  let usd=JSON.parse(localStorage.getItem("token"))
  const [userData,setUserData] = useState(usd) ;
  
  function Logout(){
    localStorage.removeItem("token");
    setUserData(usd);
  }

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
    {userData && <span><BiSolidUser color="" size={25}/> {userData.username}</span>}
    {userData && <Button style={"btn secondary-btn"} onClick={Logout} >Log out</Button>}
  </nav>
}

export default Nav;