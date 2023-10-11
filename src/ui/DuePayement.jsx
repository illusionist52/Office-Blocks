// import LinkButton from "./LinkButton";
import "./duepayment.css";
import StripeCheckout from 'react-stripe-checkout';
import toast from "react-hot-toast";

function DuePayment() {


  const onToken = (token) => {
    console.log(token);
    toast.success('Payment Successfully Done')
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
        <StripeCheckout
          token={onToken}
          stripeKey="pk_test_51NzOauSGu21KOdqPytRZ1vVQhPX2dJkB1EVBW1cSOibDjt4CCta20a1z0K1O4lqbZgvqARqbZ7TdgsVqS3VxXHLc00zTLy36Vk"
        />
      </div>
    </div>
  );
}
export default DuePayment;
