import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Appnav(){
  return <nav className="nav">
    <Logo/>
    <ul>
      <li>
        <NavLink>Dashboard</NavLink>
      </li>
      <li>
        <NavLink>Browse properties</NavLink>
      </li>
      <li>
      <NavLink>Favourited</NavLink>
      </li>
    </ul>


  </nav>
}
export default Appnav;