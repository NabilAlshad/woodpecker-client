import React, { useState, useEffect } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-reaches-65292.herokuapp.com/getServices")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className="mt-5 p-5 service">
      <h1
        // style={{ fontSize: "55px" }}
        className="text-center text-light service-title"
      >
        {" "}
        Our services
      </h1>
      {/* <div className="underline text-center"></div> */}
      <div className="row w-100 p-5">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
