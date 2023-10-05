

function RenterPropertyCard() {
  return (
    <div>
      <div className="property-card1">
        <img src="../../public/office-1.jpg" alt="Property 1" />
        {/* <h3>Property 1</h3>
                <p className="property-info">Property details</p> */}
        <div className="container--r">
          <span>₹ 2500</span>
          <p>/month</p>
        </div>

        {/* <Link to="/singleprop" className="prop-name">NANTHANI HEIGHTS</Link> */}
        <p>MUMBAI CENTRAL </p>
        <div className="container--r">
          {/* <GiOfficeChair className="icon" /> */}
          <p>4 Conference Room/(s)</p>
          {/* <BiCube className="icon" /> */}
          <p> 1000 /sqft </p>
        </div>
      </div>
    </div>
  )
}

export default RenterPropertyCard