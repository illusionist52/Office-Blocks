import './RenterPropertyCard.css'

function RenterPropertyCard() {
  return (
    <div>
      <div className="property-card1">
        <img src="../../public/office-1.jpg" alt="Property 1" />
        <div>
          <div className='c-flex'>
            <h3 className='c-title'>Title</h3>
            <p className='c-price'> ₹ 4000 </p>
          </div>
          <p className="c-detail">Property details</p>

          <p className='c-desc'>A spacious, modern office space located in the heart of the city, featuring open-concept workstations, natural light, and state-of-the-art amenities for productive collaboration.</p>

          <span className="tag buy c-tag" > Buy </span>

          {/* {card.manageprop && <span className="tag" > For Sale </span>}
          {!card.manageprop && <span className="tag cowork" > Co-Working </span>}
          {card.Furnished && <span className="tag furnish" > Furnished </span>} */}
        </div>

      </div>
    </div>
  )
}

export default RenterPropertyCard