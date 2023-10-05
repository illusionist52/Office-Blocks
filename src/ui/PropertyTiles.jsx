import "./hero.css"
import "./propertytiles.css"
import "../index.css"
import { GiOfficeChair } from "react-icons/gi"
import { BiCube } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
function PropertyTiles({ card }) {

  const navigate = useNavigate();

  return <div onClick={() => navigate(`${card.id}`)} className="grid-item">
    <img src="../../public/prop-1.jpg" />
    <div>
      {/* <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span> */}
      {card.manageprop && <span className="tag" > For Sale </span>}
      {!card.manageprop &&<span className="tag cowork" > Co-Working </span>}
      {card.Furnished && <span className="tag furnish" > Furnished </span>}
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