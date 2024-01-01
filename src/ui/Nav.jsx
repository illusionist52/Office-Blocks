import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "../index.css"
import "../pages/homepage.css"
import Logo from "./Logo";
import Button from "./Button";
import LinkButton from "./LinkButton";
import { BiSolidUser } from "react-icons/bi";
import { useState } from "react";
import toast from "react-hot-toast";


function Nav() {

  let usd = JSON.parse(localStorage.getItem("token"))
  const [userData, setUserData] = useState(usd);

  const navigate = useNavigate();
 
  function Logout() {
    localStorage.removeItem("token");
    setUserData(usd);
    toast.success("Logged out successfully");
    navigate('/');
    window.location.reload();
  }

  return <nav className="nav">
    <Logo />

    <ul>
      <li>
        <NavLink to="/signup">Dashboards</NavLink>
      </li>
      <li>
        <NavLink to="/properties">Browse Properties</NavLink>
      </li>
      <li>
        <NavLink to="/resources">Resources</NavLink>
      </li>
    </ul>

    {!userData && <LinkButton to={"/signup"} style={"btn primary-btn"}>Sign up</LinkButton>}
    {!userData && <LinkButton to={"/login"} style={"btn secondary-btn"}>Log in</LinkButton>}
    {userData && <span style={{ display: "flex", alignItems: "center", fontWeight: "600" }}><BiSolidUser color="" size={25} /> {userData.username}</span>}
    {userData && <Button style={"btn secondary-btn"} onClick={Logout} >Log out</Button>}
  </nav>
}

export default Nav;