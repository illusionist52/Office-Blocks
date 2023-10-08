import "../pages/Renter.css"

function RequestCard({request}) {
  return (
    <div>
        <div className="reqcard">
                    <div className="request-details">
                        <h2>{request.propertyName}</h2>
                        <h3>Request from {request.requestedBy}</h3>
                        <p>Date:{request.date}</p>
                        <p>Location: {request.location}</p>
                    </div>
                    <div className="request-actions">
                        <button className="approve-btn">Approve</button>
                        <button className="reject-btn">Reject</button>
                    </div>
        </div>
        
    </div>
  )
}

export default RequestCard