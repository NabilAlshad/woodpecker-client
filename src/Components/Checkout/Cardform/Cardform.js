import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Cardform = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setErrorMsg(error.message);
      console.log(error.message);
      setSuccessMessage(null);
      console.log("[error]", error);
    } else {
      setSuccessMessage(paymentMethod.id);
      handlePayment(paymentMethod.id, paymentMethod.card);
      console.log("[PaymentMethod]", paymentMethod);
      setErrorMsg(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button
          className="btn btn-outline-success"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      {successMessage && (
        <p style={{ color: "green" }}>Thank you for your payment</p>
      )}
    </div>
  );
};

export default Cardform;
