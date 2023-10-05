import "../ui/hero.css";
import "../index.css";
import "./propertytiles.css"
import { FaPercentage } from "react-icons/fa"
import { HiOfficeBuilding} from "react-icons/hi"
import { AiOutlineDollar } from "react-icons/ai"
import PropertyTiles from "./PropertyTiles";
import Button from "./Button";
import LinkButton from "./LinkButton";
import Features from './Features'
import Footer from './Footer'

function Hero() {

  

  return (


    <>
      <div className="container">
        <div className="hero-1">
          <div className="hero-1-flex">
            <h2>Buy, rent or sell your property easily </h2>
            <p>
              A platform to buy, sell or rent any property without any commision
            </p>
            <div className="hero-span">
              <span>
                50k+
                <p>renters</p>
              </span>

              <span>
                10k+
                <p>properties</p>
              </span>
            </div>
            <LinkButton to={"/rent"} style={"btn secondary-btn"}>Browse properties</LinkButton>
          </div>
          <div className="hero-img">
            <img src="../../Mindspace.png" />
          </div>
        </div>

        <Features />


        <div className="hero-1">
          <div className="hero-img">
            <img src="../../public/office-2.jpg" />
          </div>
          <div className="hero-1-flex">
            <h2>We make it easy for tenants and landlords</h2>
            <p>
              Whether it's selling your current home, getting financing, or
              buying a new home, we make it easy and efficient. The best part?
              you'll save a bunch of money and time with our services
            </p>
           
            <LinkButton to={"/login"} style={"btn secondary-btn"}>See more</LinkButton>
          </div>
        </div>

        <div className="hero-1">
          <div className="hero-1-flex">
            <h2>The new way to find your new office </h2>
            <p>
              Find your dream office to work in with more than 10k+ properties listed
            </p>
            <div className="hero-span">
              <div className="container-sm">
              <span>
                <FaPercentage/>
              </span>
              <span>
                7.4%
              </span>
              <p>Property return rate</p>
              </div>
              <div className="container-sm">
              <span>
                <HiOfficeBuilding/>
              </span>
              <span>
                456
              </span>
              <p>Property sold</p>
              </div>
              <div className="container-sm">
              <span>
                <AiOutlineDollar/>
              </span>
              <span>
                21
              </span>
              <p>Daily transactions</p>              
              </div>

            </div>
          </div>
          <div className="hero-img">
            <img src="../../public/office-3.jpg" />
          </div>
        </div>

        {/* <div className="container-md">
          <div className="container-flex">
          <h2>Based on your location</h2>
          <p>Some of our picked offices near your location</p>
          <div className="grid--2cols">

            <PropertyTiles/>
          
          </div>
          </div>
        </div> */}
      </div>

      <Footer />

      
    </>
  );
}
export default Hero;
