import { useState } from "react"
import styles from "./SearchBar.module.css"
function SearchBar(){
  const [query, setQuery]= useState("")
  return  <input
  className={styles.search}
  type="text"
  placeholder="Search agencies..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
}
export default SearchBar;