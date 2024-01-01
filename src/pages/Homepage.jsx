import Hero from "../ui/Hero";
import Nav from "../ui/Nav"
import OwnerNav from "../ui/OwnerNav";
import Appnav from '../ui/Appnav'

function Homepage(){

  const userData = JSON.parse( localStorage.getItem('token') );
  console.log("This is the homepage");
  
return(
  <>
  {!userData && <Nav />}
  {userData?.role === 'Renter' && <OwnerNav/> }
  {userData?.role === 'Rentee' && <Appnav/> }
  <Hero/>
  </>
)
}
export default Homepage;