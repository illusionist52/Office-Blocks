import "./hero.css"
import "./propertytiles.css"
import "../index.css"
import { GiOfficeChair } from "react-icons/gi"
import {BiCube} from "react-icons/bi"
import { Link } from "react-router-dom"
function PropertyTiles(){
  return <div className="grid-item">
      <img src="../../public/prop-1.jpg"/>
      <div className="container--r">
      <span>₹250,000</span>
      <p>/month</p>
      </div>
      
      <Link to="/singleprop">Vaibhav's office</Link>
      <p>204 barkat ali wadala</p>
      <div className="container--r">
        <GiOfficeChair className="icon"/>
        <p>16 persons</p>
        <BiCube className="icon"/>
        <p>2400 sq ft</p>
      </div>
  </div>
}
export default PropertyTiles;