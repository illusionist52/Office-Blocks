import React from 'react'
import styles from'./PropertiesRented.module.css'
// import Properties from '../pages/Properties'
import PropertyTiles from './PropertyTiles'
import { PuffLoader } from "react-spinners";
import { useQuery } from '@tanstack/react-query'
import getProperties from '../services/apiProperties';
export const PropertiesRented = () => {
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
    );
  }
  return (
    // <div className={styles.box}>PropertiesRented</div>
    <>
      <h2>Recommendations</h2>
      <div className='grid-2cols' style={{ margin: "2rem", display: "flex", flexDirection: "row", width: "57rem", overflowY: "auto" }}>
      {data.map((card, i) => (
                <PropertyTiles card={card} key={i} />
              ))}
    </div>
    </>
  )
}
export default PropertiesRented;