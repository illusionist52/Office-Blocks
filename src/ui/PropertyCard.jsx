import React from "react";
import './PropertyCard.css'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
const PropertyCard = () => {

  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties`)}
    > 
      <img src="../../public/office-1.png" alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span> 9</span>
      </span>
      <span className="primaryText">00</span>
      <span className="secondaryText">000</span>
    </div>
  );
};

export default PropertyCard;
