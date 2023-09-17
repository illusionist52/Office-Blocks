import ApplicationChance from "./ApplicationChance";
import DuePayment from "./DuePayement";
import TenantApplication from "./TenantApplication";
import styles from "./UserDashboard.module.css"
function UserDasboard() {
  return (
    <div className={styles.grid}>
      {/* <TenantApplication/>
      <DuePayment /> */}
      
      <div className={styles.grid1}>
      <TenantApplication/>
      </div>
      <div className={styles.grid2}>2</div>
      <div className={styles.grid3}><DuePayment/></div>
      <div className={styles.grid4}><ApplicationChance/></div>
      <div className={styles.grid5}>5</div>
    </div>
  );
}
export default UserDasboard;
