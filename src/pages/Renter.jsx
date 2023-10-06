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
function Renter() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["properties"],
        queryFn: getProperties,
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

      const userData = JSON.parse(localStorage.getItem("token"))
    
      const fdata=data.filter((property)=>property.OwnedBy===userData.username)
      console.log(fdata)
      
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
                       {fdata.map((card)=>(<RenterPropertyCard card={card} />))}
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
                            <RequestCard />
                            <RequestCard />
                            <RequestCard />
                            <RequestCard />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Renter