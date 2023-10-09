import "./Renter.css"
import RenterPropertyCard from '../ui/RenterPropertyCard'
import RequestCard from '../ui/RequestCard'
// import RenterNav from "../ui/RenterNav";
// import { useState } from "react";
import Button from '../ui/Button';
import OwnerNav from "../ui/OwnerNav";
import { property } from "lodash";
import { useQuery } from "@tanstack/react-query";
import getProperties from "../services/apiProperties";
import { PuffLoader } from "react-spinners";
import { getRequests } from "../services/apiRequests";
function Renter() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["properties"],
        queryFn: getProperties,
      });
      const { data:requests , isLoading:reqloading} = useQuery({
        queryKey: ["requests"],
        queryFn: getRequests
      });
      if (isLoading) {
        return (
          <div className="wrapper flexCenter" style={{ height: "60vh" }}>
            <PuffLoader
              height="80"
              width="80"
              radius={1}
              color="#4066ff"
              aria-label="puff-loading"
            />
          </div>
        );}
        if (reqloading) {
            return (
              <div className="wrapper flexCenter" style={{ height: "60vh" }}>
                <PuffLoader
                  height="80"
                  width="80"
                  radius={1}
                  color="#4066ff"
                  aria-label="puff-loading"
                />
              </div>
            );}

      const userData = JSON.parse(localStorage.getItem("token"))
    
      const fdata=data.filter((property)=>property.OwnedBy===userData.username)
      

      const reqdata= requests.filter((request)=>request.ownedBy===userData.username &&request.status==="PENDING" )
      console.log(requests)
    return (
        <>
            <OwnerNav />
            <div className="dashboard">
                <div className="left-section">
                    <div className="AddProp">
                        <h2 className='listed-prop'>Your listed properties</h2>
                        <div className="addprop">
                            <Button style={'btn secondary-btn'} to={'/addprop'} >Add property</Button>
                        </div>
                    </div>

                    <div className="propertiesCard">
                       {fdata.map((card)=>(<RenterPropertyCard card={card} key={card.id} />))}
                    </div>
                </div>




                <div className="right-section">
                    <div className="profile">
                        <h2 className="ownerName">Owner Profile</h2>
                        <div className="profile-content">
                            <img src="../../public/profile.png" alt="Renter" className="profile-photo" />
                            <div className="profile-info">
                                <p>Name: {userData.username}</p>
                                <p>Number of Properties Listed : {fdata.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="requests">
                        <h2 className="req">Requests</h2>
                        <div className='requestcard'>
                           {reqdata.map((request)=>(<RequestCard key={request.id} request={request}/>))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Renter