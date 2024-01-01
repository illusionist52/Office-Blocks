import './RenterPropertyCard.css'
import { useQuery } from '@tanstack/react-query';
import getProperties from '../services/apiProperties';
import { property } from 'lodash';
function RenterPropertyCard({card}) {
 
  return (
    <div>
      <div className="property-card1">
        <img src={card.image} alt="Property 1" />
        <div>
          <div className='c-flex'>
            <h3 className='c-title'>{card.title}</h3>
            <p className='c-price'> ₹{card.price}/m </p>
          </div>
          <p className="c-detail">Address: {card.address}</p>

          <p className='c-desc'>{card.description}</p>

          <span className="tag buy c-tag" > {card.manageprop} </span>

          {/* {card.manageprop && <span className="tag" > For Sale </span>}
          {!card.manageprop && <span className="tag cowork" > Co-Working </span>}
          {card.Furnished && <span className="tag furnish" > Furnished </span>} */}
        </div>

      </div>
    </div>
  )
}

export default RenterPropertyCard