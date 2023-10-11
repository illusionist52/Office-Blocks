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
 
  return (
    <>
      <Appnav />
      <div className={styles.grid}>
        {/* <TenantApplication/>
        <DuePayment /> */}

        <div className={styles.grid1}>
          <TenantApplication />
        </div>
        <div className={styles.grid2}><Recommendations /></div>
        <div className={styles.grid3}><DuePayment /></div>
        <div className={styles.grid4}><ApplicationChance /></div>
        <div className={styles.grid5}><PropertiesRented /></div>
      </div>

              


    </>
  );
}
export default UserDasboard;
