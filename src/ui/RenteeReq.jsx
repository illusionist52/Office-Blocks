import "../pages/Renter.css"

function RenteeReq({request}) {
  return (
    <div>
        <div className="reqcard">
                    <div className="request-details">
                        <h2>{request.propertyName}</h2>
                        <h3>Property owned by {request.ownedBy}</h3>
                        <h3>Date{request.date}</h3>
                        <h3>Time{request.time}</h3>
                    </div>
                    <div className="request-actions">
                        <h3 className="btn secondary-btn">{request.status}</h3>
                    </div>
        </div>
        
    </div>
  )
}

export default RenteeReq