import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../../App";
import "./Checkout.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Payment from "./Payment/Payment";

const Checkout = () => {
  const { Id } = useParams();
  console.log(Id);
  const [serviceProduct, setServiceProduct] = useState({});
  const [loggedInUser, setLoggedInuser] = useContext(userContext);
  const [shippingData, setShippingData] = useState(null);
  useEffect(() => {
    fetch("https://sleepy-reaches-65292.herokuapp.com/service/" + Id)
      .then((res) => res.json())
      .then((data) => {
        setServiceProduct(data);
        console.log(data);
      });
  }, [Id]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setShippingData(data);
  };
  const date = new Date();
  const newDate = date.toString();

  const handlePayment = (paymentId, paymentCard) => {
    const orderData = {
      ...loggedInUser,
      shipment: shippingData,
      paymentId: paymentId,
      paymentCard: paymentCard,
      serviceName: serviceProduct.name,
      time: newDate,
    };
    console.log(orderData);
    fetch("https://sleepy-reaches-65292.herokuapp.com/addOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    }).then((res) => {
      setServiceProduct();
      console.log("server responsed");
    });
  };

  return (
    <div className="row w-100">
      <h1 className="text-center bg-info text-white p-3">Confirm Your Order</h1>
      <div
        style={{ display: shippingData ? "none" : "block" }}
        className="col-md-5 mt-5 me-3 shadow-lg text-center"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group ">
            <input
              className="form-control"
              placeholder="Your Name"
              {...register("name")}
            />
          </div>
          <div className="form-group mt-4">
            <input
              className="form-control"
              placeholder="email "
              {...register("email")}
            />
          </div>
          <div className="form-group mt-4">
            <input
              className="form-control"
              placeholder="phone Number "
              {...register("phone")}
            />
          </div>
          <div className="form-group mt-4">
            <textarea
              rows="5"
              placeholder="address"
              className="form-control"
              {...register("address")}
            />

            <input
              className="mt-4 btn btn-outline-success"
              type="submit"
              value="confirm order"
            />
          </div>
        </form>
      </div>
      <div
        style={{ display: shippingData ? "block" : "none" }}
        className="mt-lg-5 text-center col-md-5"
      >
        <h5 className="text-success">pay with card</h5>
        <Payment handlePayment={handlePayment}></Payment>
      </div>
    </div>
  );
};

export default Checkout;
