import ApplicationChance from "./ApplicationChance";
import DuePayment from "./DuePayement";
import PropertiesRented from "./PropertiesRented";
import Recommendations from "./Recommendations";
import TenantApplication from "./TenantApplication";
import styles from "./UserDashboard.module.css"
import Appnav from './../ui/Appnav';
import Button from "./Button";
import RenteeReq from "./RenteeReq";
import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../services/apiRequests";
import { PuffLoader } from "react-spinners";

function UserDasboard() {
  const { data:requests, isLoading } = useQuery({
    queryKey: ["requests"],
    queryFn: getRequests
  });
  const userdata= JSON.parse(localStorage.getItem("token"))
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
    const fildata=requests.filter((request)=>request.requestedBy===userdata.username)
    console.log(fildata)
  return (
    <>
      <Appnav />
      {/* <div className={styles.grid}>
        <TenantApplication/>
        <DuePayment />

        <div className={styles.grid1}>
          <TenantApplication />
        </div>
        <div className={styles.grid2}><Recommendations /></div>
        <div className={styles.grid3}><DuePayment /></div>
        <div className={styles.grid4}><ApplicationChance /></div>
        <div className={styles.grid5}><PropertiesRented /></div>
      </div> */}

      <DuePayment />

<div className="dashboard">
                <div className="left-section">
                    <div className="AddProp">
                        <h2 className='listed-prop'>Your Rented Property</h2>
                          

                        <div className="addprop">
                            {/* <Button style={'btn secondary-btn'} to={'/addprop'} >Add property</Button> */}
                        </div>
                        <div className='empty'>
                          <h1>HELLO</h1>
                        </div>
                    </div>

                </div>




                <div className="right-section">
                    <div className="requests">
                        <h2 className="req">Your Requests Properties</h2>
                        <div className='requestcard' style={{margin: "2rem"}}>
                           {/* {reqdata.map((request)=>(<RequestCa  rd request={request}/>))} */}
                          {fildata.map((request)=><RenteeReq request={request}/>)}
                        </div>
                    </div>

                </div>
            </div>


    </>
  );
}
export default UserDasboard;
