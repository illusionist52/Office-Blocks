// import { useContext, useState } from "react";
// import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
// import { getProperty, removeBooking } from "../../utils/api";
// import { PuffLoader } from "react-spinners";
// import { AiFillHeart } from "react-icons/ai";
import "./SingleProperty.css";

import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Footer from "../ui/Footer";
import Map from './../ui/Map';
// import useAuthCheck from "../../hooks/useAuthCheck";
// import { useAuth0 } from "@auth0/auth0-react";
// import BookingModal from "../../components/BookingModal/BookingModal";
// import UserDetailContext from "../../context/UserDetailContext.js";
// import { Button } from "@mantine/core";
// import { toast } from "react-toastify";
// import Heart from "../../components/Heart/Heart";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  // const { data, isLoading, isError } = useQuery(["resd", id], () =>
  //   getProperty(id)
  // );

  // const [modalOpened, setModalOpened] = useState(false);
  // const { validateLogin } = useAuthCheck();
  // const { user } = useAuth0();

  // const {
  //   userDetails: { token, bookings },
  //   setUserDetails,
  // } = useContext(UserDetailContext);

  // const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
  //   mutationFn: () => removeBooking(id, user?.email, token),
  //   onSuccess: () => {
  //     setUserDetails((prev) => ({
  //       ...prev,
  //       bookings: prev.bookings.filter((booking) => booking?.id !== id),
  //     }));

  //     toast.success("Booking cancelled", { position: "bottom-right" });
  //   },
  // });

  // if (isLoading) {
  //   return (
  //     <div className="wrapper">
  //       <div className="flexCenter paddings">
  //         <PuffLoader />
  //       </div>
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className="wrapper">
  //       <div className="flexCenter paddings">
  //         <span>Error while fetching the property details</span>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          {/* <Heart id={id}/> */}
        </div>

        {/* image */}
        <img className="office-img" src="./../public/office-2.jpg" alt="OFFICE PHOTO" />

        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">
                {/* {data?.title}  */} title
              </span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                {/* $ {data?.price} */} PRICE
              </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>
                  {/* {data?.facilities?.bathrooms} Bathrooms */} BATHROOMS
                </span>
              </div>

              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>
                  {/* {data?.facilities.parkings} Parking */} Parking
                </span>
              </div>

              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>
                  {/* {data?.facilities.bedrooms} Room/s */} ROOM/S
                </span>
              </div>
            </div>

            {/* description */}

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {/* {data?.description}  */} DESCRIPTIONS
            </span>

            {/* address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {/* {data?.address}{" "} */} ADDRESS
                {/* {data?.city}{" "} */}   CITY
                {/* {data?.country} */} COUNTRY
              </span>
            </div>

            {/* booking button */}
            {/* {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button
                  variant="outline"
                  w={"100%"}
                  color="red"
                  onClick={() => cancelBooking()}
                  disabled={cancelling}
                >
                  <span>Cancel booking</span>
                </Button>
                <span>
                  Your visit already booked for date{" "}
                  {bookings?.filter((booking) => booking?.id === id)[0].date}
                </span>
              </>
            ) : (
              <button
                className="button"
                onClick={() => {
                  validateLogin() && setModalOpened(true);
                }}
              >
                Book your visit
              </button>
            )} */}

            <button className="button">Book your visit</button>

            {/* <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={user?.email}
            /> */}
          </div>

          {/* right side */}
          <div className="map">
            <Map />
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Property;
