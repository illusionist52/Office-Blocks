import { useState } from "react";
import SearchBar from "../ui/Searchbar";
import "./Properties.css";
// import { useEffect } from "react";
// import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
// import PropertyCard from "../ui/PropertyCard";
import { useQuery } from "@tanstack/react-query";
import getProperties from "../services/apiProperties";
import PropertyTiles from "../ui/PropertyTiles";
import Appnav from './../ui/Appnav'

const Properties = () => {
  // const { data, isError, isLoading } = useProperties();
  const [filter, setFilter] = useState("");
  const {data, error, isLoading}= useQuery({
    queryKey: ["properties"],
    queryFn: getProperties
  })
  // useEffect(function(){
  //   getProperties().then((data)=>console.log(data))
  // })
// console.log(data)
  // if (isError) {
  //   return (
  //     <div className="wrapper">
  //       <span>Error while fetching data</span>
  //     </div>
  //   );
  // }

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
    <div className="wrapper">

      <Appnav />

      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />

        <div className="container-md">
          <div className="container-flex">
          <h2>Based on your location</h2>
          <p>Some of our picked offices near your location</p>
          <div className="grid--2cols">

          {
            data.map((card, i)=> (<PropertyTiles card={card} key={i}/>))

           
          }
          
          </div>
          </div>
        </div>


        {/* <div className="paddings flexCenter properties grid--2cols">
          {
            data.map((card, i)=> (<PropertyCard card={card} key={i}/>))

           
          }
         
        </div> */}
      </div>
    </div>
  );
};

export default Properties;
