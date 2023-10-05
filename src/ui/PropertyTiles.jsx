import "./hero.css"
import "./propertytiles.css"
import "../index.css"
import { GiOfficeChair } from "react-icons/gi"
import {BiCube} from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
function PropertyTiles({card}){
  const navigate=useNavigate()
  return <div className="grid-item" onClick={()=>navigate(`/propeties/${card.id}`)}>
      <img src="../../public/prop-1.jpg"/>
      <div className="container--r">
      <span>₹ {card.price}</span>
      <p>/month</p>
      </div>
      
      <Link to="/singleprop" className="prop-name">{card.title}</Link>
      <p>{card.address} </p>
      <div className="container--r">
        <GiOfficeChair className="icon"/>
        <p>{card.conference_room} Conference Room/(s)</p>
        <BiCube className="icon"/>
        <p> {card.area} /sqftg </p>
      </div>
  </div>
}
export default PropertyTiles;