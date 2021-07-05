import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cardform from "../Cardform/Cardform";

const Payment = ({ handlePayment }) => {
  const stripePromise = loadStripe(
    "pk_test_51J6cArCSlvl22jgP3F6ZzZHZOKnfSi55uR0F6V3t9uYW9IrGl2vRwPYR6qOsh66bvMCQCzJvbEQ1wvrTnVKP7Nq600dugBTZvP"
  );
  return (
    <Elements stripe={stripePromise}>
      <Cardform handlePayment={handlePayment}></Cardform>
    </Elements>
  );
};

export default Payment;
