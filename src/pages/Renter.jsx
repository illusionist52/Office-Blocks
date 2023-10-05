import "./Renter.css"
import RenterPropertyCard from '../ui/RenterPropertyCard'
import RequestCard from '../ui/RequestCard'
// import RenterNav from "../ui/RenterNav";
// import { useState } from "react";
import Button from '../ui/Button';
import OwnerNav from "../ui/OwnerNav";

function Renter() {
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
                        <RenterPropertyCard />
                    </div>
                </div>




                <div className="right-section">
                    <div className="profile">
                        <h2 className="ownerName">Owner Profile</h2>
                        <div className="profile-content">
                            <img src="../../public/profile.png" alt="Renter" className="profile-photo" />
                            <div className="profile-info">
                                <p>Name: Atharva</p>
                                <p>Number of Properties Listed : 4</p>
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