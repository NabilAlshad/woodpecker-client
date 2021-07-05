import React, { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-reaches-65292.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);

  return (
    <div className="col-md-10 mt-5 p-3">
      <table className="table table-bordered">
        <thead
          style={{ fontSize: "20px" }}
          className="text-center text-warning p-2"
        >
          <th scope="col">No</th>
          <th scope="col">Email</th>
          <th scope="col">Name</th>
          <th scope="col-">ordered</th>
          <th scope="col">Date</th>
          <th scope="col">Payment id</th>
          <th scope="col">status</th>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr className="text-center text-success p-2">
              <td>{index + 1}</td>
              <td>{order.shipment.email}</td>
              <td>{order.shipment.name}</td>
              <td>{order.serviceName}</td>
              <td>{order.time}</td>
              <td>{order.paymentId}</td>
              <td>
                <select class="form-select" aria-label="Default select example">
                  <option value="1">processing</option>
                  <option value="2">pending</option>
                  <option value="3">Complete</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
