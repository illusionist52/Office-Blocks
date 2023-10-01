import React from 'react'
import "../pages/Renter.css"
function RequestCard() {
  return (
    <div>
        <div class="reqcard">
                    <div class="request-details">
                        <h3>Request from John Doe</h3>
                        <p>Date: September 25, 2023</p>
                        <p>Message: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div class="request-actions">
                        <button class="approve-btn">Approve</button>
                        <button class="reject-btn">Reject</button>
                    </div>
        </div>
        
    </div>
  )
}

export default RequestCard