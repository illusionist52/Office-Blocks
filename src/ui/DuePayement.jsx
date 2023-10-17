// import LinkButton from "./LinkButton";
import "./duepayment.css";
import StripeCheckout from 'react-stripe-checkout';
import toast from "react-hot-toast";
import Modal from 'react-modal';
import React, { useRef, useState } from "react";
import Button from "./Button";
import { property, set } from "lodash";
// import LinkButton from "./LinkButton";

function DuePayment({fildata, properties}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [select, setSelect]=useState("")
 
  
  const approveddata= fildata.filter((request)=>request.status==="Approved")
  if(select){
  }
  function openModal() {
    setIsOpen(true);
  }

  const onToken = (token) => {
    const filprop=properties.find((prop)=>prop.title===select)
    console.log(filprop.price)
    // Calculate the total amount including the commission
    const paymentAmount = 5000; // Payment amount in cents
    const commission = paymentAmount*0.1; // Commission amount in cents
    const totalAmount = paymentAmount + commission;

    // Add your logic here to process the payment using the token and totalAmount
    // For example, you can send the token and totalAmount to your server and charge the user
    console.log(token);
    console.log(totalAmount);
    // console.log(token);
    toast.success('Payment Successfully Done')
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="payment-box grid1">
      <div className="container--r ">
        <h3 className="t3-heading">Schedule payment </h3>
        <span className="tag">Due in 8 days</span>
      </div>
      <div className="container--r view-payment-box">
        <div>
          <p className="container--r"> <span className="circle circle-blue"></span> Total</p>
          <h4>1200</h4>
        </div>
        <div>
          <p className="container--r"> <span className="circle circle-green"></span> Paid</p>
          <h4>700</h4>
        </div>
        <div>
          <p className="container--r"> <span className="circle circle-red"></span> Remaining</p>
          <h4>500</h4>
        </div>
        {/* <LinkButton style={"btn secondary-btn pay-btn"} >Schedule payment</LinkButton> */}


        <Button onClick={openModal} style={"btn secondary-btn pay-btn"} className="button" >Schedule Payment</Button>

        {/* <StripeCheckout
          token={onToken}
          stripeKey="pk_test_51NzOauSGu21KOdqPytRZ1vVQhPX2dJkB1EVBW1cSOibDjt4CCta20a1z0K1O4lqbZgvqARqbZ7TdgsVqS3VxXHLc00zTLy36Vk"
          amount={100000}
          currency="USD"
          name="Payment Checkout"
          description={`Price $1000 with commision 10%`}
          panelLabel="Pay now"
        /> */}
        <Modal style={{ width: "50%" }}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
            <h2 style={{ color: "black" }}>Schedule Payment</h2>
            <button onClick={closeModal} className="btn secondary-btn">close</button>
          </div>

          <form>
            <select value={select} onChange={(e)=>{setSelect(e.target.value)}} >
              <option>Select an item</option>
              {approveddata.map((req)=><option value={req.propertyName}>{req.propertyName}</option>)}
            </select>
           

          </form>

          <StripeCheckout
            token={onToken}
            stripeKey="pk_test_51NzOauSGu21KOdqPytRZ1vVQhPX2dJkB1EVBW1cSOibDjt4CCta20a1z0K1O4lqbZgvqARqbZ7TdgsVqS3VxXHLc00zTLy36Vk"
            amount={100000}
            currency="USD"
            name="Payment Checkout"
            description={`Price $1000 with commision 10%`}
            panelLabel="Pay now"
          />
        </Modal>

        {/* <StripeCheckout
          token={onToken}
          stripeKey="pk_test_51NzOauSGu21KOdqPytRZ1vVQhPX2dJkB1EVBW1cSOibDjt4CCta20a1z0K1O4lqbZgvqARqbZ7TdgsVqS3VxXHLc00zTLy36Vk"
        /> */}
      </div>
    </div>
  );
}
export default DuePayment;
