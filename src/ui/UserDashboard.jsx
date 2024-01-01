import ApplicationChance from "./ApplicationChance";
import DuePayment from "./DuePayement";
import PropertiesRented from "./PropertiesRented";
import Recommendations from "./Recommendations";
import TenantApplication from "./TenantApplication";
import styles from "./UserDashboard.module.css"
import Appnav from './../ui/Appnav';
import Button from "./Button";
import RenteeReq from "./RenteeReq";
import { getRequests } from "../services/apiRequests";
import { PuffLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import getProperties from "../services/apiProperties";
function UserDasboard() {
  const { data:properties, error, isLoading1 } = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
  });
  const { data:requests, isLoading } = useQuery({
    queryKey: ["requests"],
    queryFn: getRequests
  });
  if (isLoading || isLoading1) {
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
    const userdata= JSON.parse(localStorage.getItem("token"))
 
    const fildata=requests.filter((request)=>request.requestedBy===userdata.username)
    console.log(fildata)
  return (
    <>
      <Appnav />
      <div className={styles.grid}>
        {/* <TenantApplication/>
        <DuePayment /> */}

        <div className={styles.grid1}>
          <TenantApplication />
        </div>
        <div className={styles.grid2}><Recommendations fildata={fildata} /></div>
        <div className={styles.grid3}><DuePayment fildata={fildata} properties={properties} /></div>
        <div className={styles.grid4}><ApplicationChance /></div>
        <div className={styles.grid5}><PropertiesRented /></div>
      </div>

              


    </>
  );
}
export default UserDasboard;
