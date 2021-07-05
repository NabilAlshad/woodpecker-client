import React from "react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { userContext } from "../../../App";

const CustomerOrders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-reaches-65292.herokuapp.com/customerOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [loggedInUser.email]);

  console.log(orders);
  return (
    <div className="col-md-10 mt-5 p-5">
      <table className="table  ">
        <thead className="text-center text-warning">
          <th>name</th>
          <th>email</th>
          <th>order service</th>
          <th>Date</th>
          <th>payment</th>
          <th>payment card</th>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="text-center">
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.serviceName}</td>
              <td>{order.time}</td>
              <td>{order.paymentId}</td>
              <td>{order.paymentCard.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <h1>{orders.name}</h1>
      <h5>{orders.email}</h5> */}
    </div>
  );
};

export default CustomerOrders;
