// import { useContext, useState } from "react";
// import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
// import { getProperty, removeBooking } from "../../utils/api";
// import { PuffLoader } from "react-spinners";
// import { AiFillHeart } from "react-icons/ai";
import "./SingleProperty.css";
import React from 'react';
import AppNav from '../ui/Appnav'
import { useEffect } from "react";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Footer from "../ui/Footer";
import Map from './../ui/Map';
import { useQuery } from "@tanstack/react-query";
import getProperties from "../services/apiProperties";
import { property } from "lodash";
import Modal from 'react-modal';
// import useAuthCheck from "../../hooks/useAuthCheck";
// import { useAuth0 } from "@auth0/auth0-react";
// import BookingModal from "../../components/BookingModal/BookingModal";
// import UserDetailContext from "../../context/UserDetailContext.js";
// import { Button } from "@mantine/core";
// import { toast } from "react-toastify";
// import Heart from "../../components/Heart/Heart";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#modal');


const Property = () => {
  const { pathname } = useLocation();
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  const id = Number(pathname.split("/").slice(-1)[0]);
  console.log(id)

  const { data, error, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties
  })

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


  //DATA FETCHING : 
  const property = data?.find((property) => property.id === id)


  return (
    <div className="wrapper" id="modal">

      <AppNav />

      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          {/* <Heart id={id}/> */}
        </div>

        {/* image */}
        <img className="office-img" src={property.image} alt="OFFICE PHOTO" />

        <div className="flexCenter property-details" id="MODAL">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">
                {property?.title}
              </span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                $ {property?.price}
              </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>
                  {property?.conference_room} Conference room/(s)
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
                  {property?.area} sq ft
                </span>
              </div>
            </div>

            {/* description */}

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {property?.description}
            </span>

            {/* address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {property?.address}
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

            <button onClick={openModal} className="button">Book your visit</button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
              <button onClick={closeModal}>close</button>
              <div>I am a modal</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad, vero delectus porro quibusdam sint recusandae alias sequi, dolorem veritatis laboriosam laudantium maiores dolor quo corrupti asperiores omnis odit praesentium dolores excepturi impedit rem veniam labore laborum! Veritatis quaerat explicabo, excepturi quam magnam vero laboriosam et numquam nihil dolores. Corporis eos fugit, rem perferendis enim velit molestias facere similique tenetur animi voluptatibus consequuntur, iusto, ratione delectus dolorem atque veniam. Pariatur fugiat quam inventore ipsum sed? Laboriosam eaque id quos! Harum pariatur cumque error enim quam blanditiis est deserunt eveniet, modi tempora alias porro iure vitae necessitatibus. Neque minus minima officia est, reiciendis nisi, repellat praesentium mollitia obcaecati dolore et molestias architecto nam explicabo, nihil animi ullam exercitationem illo aperiam aspernatur? Mollitia illum repellat eligendi deleniti incidunt quis eos dolorum, praesentium totam distinctio facere aperiam odio voluptate dolorem nisi sequi dicta pariatur. Molestias id culpa, veritatis animi consequatur ad, maxime odio ducimus quod voluptatem tempora iste temporibus? Minus amet assumenda eum ipsa inventore et ab voluptas at laborum eius, libero pariatur iusto atque dolore sapiente quod sunt officia dicta, ducimus molestiae, ad blanditiis architecto impedit qui! Fuga in suscipit officiis rerum, maxime doloribus quasi consequatur odit quam ad, quos neque ea.</p>
              <form>
                <input />
               
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>

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
