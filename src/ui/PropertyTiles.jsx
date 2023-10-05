import "./hero.css"
import "./propertytiles.css"
import "../index.css"
import { GiOfficeChair } from "react-icons/gi"
import { BiCube } from "react-icons/bi"
import { Link } from "react-router-dom"


function PropertyTiles({ card }) {
  return <div className="grid-item">
    <img src="../../public/prop-1.jpg" />
    <div>
      {/* <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span> */}
      <span className="tag" > For Sale </span>
      <span className="tag cowork" > Co-Working </span>
      <span className="tag furnish" > Furnished </span>
    </div>
    <div className="container--r">
      <span>₹ {card.price}</span>
      <p>/month</p>
    </div>

    <Link to="/singleprop" className="prop-name">{card.title}</Link>
    <p>{card.address} </p>
    <div className="container--r">
      <GiOfficeChair className="icon" />
      <p>{card.conference_room} Conference Room/(s)</p>
      <BiCube className="icon" />
      <p> {card.area} /sqft </p>
    </div>
  </div>
}
export default PropertyTiles;