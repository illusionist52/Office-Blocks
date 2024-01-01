import { Outlet } from "react-router-dom";
import Appnav from "../ui/Appnav";

function Rentee(){
  return(
  <div>
    <Appnav/>
    <Outlet/>
  </div>
  )
}
export default Rentee;
