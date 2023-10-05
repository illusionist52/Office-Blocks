import "../pages/Renter.css"

function RequestCard() {
  return (
    <div>
        <div className="reqcard">
                    <div className="request-details">
                        <h3>Request from John Doe</h3>
                        <p>Date: September 25, 2023</p>
                        <p>Message: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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