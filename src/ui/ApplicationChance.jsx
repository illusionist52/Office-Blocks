import styles from "./ApplicationChance.module.css"

function ApplicationChance(){
  return <div className={styles.box}>
    <div className={styles.flex}>
    <h3 className={styles.heading}>Rent Application Chance</h3>
    <span className={styles.span}>70%</span>
    <div>
    <p className={styles.p}>Chance of your tenancy </p>
    <p className={styles.p}>application to be approved</p>
    </div>
    </div>
  </div>
}
export default ApplicationChance;