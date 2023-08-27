import { NavLink } from "react-router-dom";
import "../index.css"

function Logo() {
  return (
    <NavLink to="/"><img src="../../public/Logo.jpeg" alt="Logo" className="logo" /></NavLink>
  )
}
export default Logo;