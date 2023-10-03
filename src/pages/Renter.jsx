import React from 'react'
import "./Renter.css"
import RenterPropertyCard from '../ui/RenterPropertyCard'
import RequestCard from '../ui/RequestCard'
function Renter() {
  return (
    // <div>
    //     <div class="navbar">
    //     <ul>
    //         <img src="Logo.jpeg" alt="Logo" className="logo" width="70" height="80"/>
            
    //         <a href="#"><button class="lobutton">Log out</button></a>
            
    //     </ul> 
    // </div>
    <div class="dashboard">
        <div class="left-section">
            <h2 className='listed-prop'>Your listed properties</h2>
            <div class="properties-container">
                <RenterPropertyCard/>
                <RenterPropertyCard/>
                <RenterPropertyCard/>
            </div>
        </div>

        <div class="right-section">
            <div class="profile">
                <h2>Renter Profile</h2>
                <div class="profile-content">
                    <img src="../../public/profile.png" alt="Renter" class="profile-photo"/>
                    <div class="profile-info">
                        <p>Name: Atharva</p>
                        <p>Email: am@xyz.com</p>
                    </div>
                </div>
            </div>            
            <div class="requests">
                <h2>Requests</h2>
                <RequestCard/>
                <RequestCard/>
                <RequestCard/>
                <RequestCard/>
            </div>
            
    </div>
    </div>
    // </div>
  )
}

export default Renter