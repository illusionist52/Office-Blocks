import React from 'react'
import styles from "./Recommendations.module.css"
import Button from "./Button";
import RenteeReq from "./RenteeReq";
import { useQuery } from "@tanstack/react-query";
import { getRequests } from "../services/apiRequests";
import { PuffLoader } from "react-spinners";


function Recommendations() {
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
    <div className={styles.box}>
      <div className="dashboard">
                <div>
                    <div>
                        <h3 style={{ margin: "1rem", fontSize: "2rem", color: "black"}}>Your Requests Properties</h3>
                        <div className='requestcard'>
                           {/* {reqdata.map((request)=>(<RequestCard request={request}/>))} */}
                          {fildata.map((request)=><RenteeReq request={request}/>)}
                        </div>
                    </div>

                </div>
            </div>
    </div>
    
  )
}

export default Recommendations