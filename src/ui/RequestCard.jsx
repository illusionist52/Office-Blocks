import "../pages/Renter.css"
import { updateRequests } from "../services/apiRequests";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
function RequestCard({request}) {
  const { mutate, isLoading } = useMutation({
    mutationFn: updateRequests,
    onSuccess: () => {
      toast.success("Request done")
      window.location.reload();
    }
  })
  function approve(){
   mutate(request.id)
  }
  function reject(){
   
    mutate(request.id)
  }
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
                        <button onClick={approve} className="approve-btn">Approve</button>
                        <button onClick={reject}className="reject-btn">Reject</button>
                    </div>
        </div>
        
    </div>
  )
}

export default RequestCard