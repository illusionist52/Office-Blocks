import { useEffect, useState } from "react";
import SearchBar from "../ui/Searchbar";
import "./Properties.css";
// import { useEffect } from "react";
// import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import getProperties from "../services/apiProperties";
import PropertyTiles from "../ui/PropertyTiles";
import Appnav from "./../ui/Appnav";
import OwnerNav from "./../ui/OwnerNav";
import { useNavigate } from "react-router-dom";
import styles from "../ui/Searchbar.module.css";
import Button from "../ui/Button";

import { searchProp } from "../services/apiSearch";

const Properties = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const userData = JSON.parse(localStorage.getItem("token"));
  console.log(query);
  const navigate = useNavigate();

 
    // useEffect(()=>{
    //   async function search(){
    //     const apiData = await searchProp(query);
    //     setFilteredItems(apiData);
    //     isLoading = true;
    // }}
    // ,[query])
    
    useEffect(() => {
      const search = async () => {
        const apiData = await searchProp(query);
        setFilteredItems(apiData);
        // isLoading = true;
      } 
    
      search();
    }, [query])
  

  // const { data, isError, isLoading } = useProperties();
  useEffect(function () {
    if (!userData) {
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
  });
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
  // function onSearch(){
  //   const filterBySearch = data.filter((property) => {
  //     if (property.title.toLowerCase()
  //         .includes(query.toLowerCase())) { return property; } })
  //       console.log(filterBySearch)
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

  // const filteredItems = getFilteItems(query, data)

  return (
    <div className="wrapper">
      {userData?.role === "Renter" && <OwnerNav />}
      {userData?.role === "Rentee" && <Appnav />}

      <div className="flexColCenter paddings innerWidth properties-container">
        <div>
          <input
            style={{ border: "2px solid black" }}
            className={styles.search}
            type="text"
            placeholder="Search properties..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* <button onClick={sea}>🔍</button> */}
        </div>

      
        <div className="container-md">
          <div className="container-flex">
            <h2>Based on your location</h2>
            <p>Some of our picked offices near your location</p>
            <div className="grid--2cols">

              {/* Conditionally rendering the filtered items */}
              {filteredItems
                ? filteredItems.map((card,i) => (
                    <PropertyTiles card={card} key={i} />
                  ))
                : data.map((card, i) => <PropertyTiles card={card} key={i} />)}
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
