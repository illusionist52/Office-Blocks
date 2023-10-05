import { useState } from "react"
import styles from "./SearchBar.module.css"

function SearchBar(){
  const [query, setQuery]= useState("")
  return  <input
  style={{ border: "2px solid black" }}
  className={styles.search}
  type="text"
  placeholder="Search properties..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
}
export default SearchBar;