import React from "react";
import { useHistory } from "react-router";
import "./Service.css";

const Service = ({ service }) => {
  let { _id } = service;
  console.log(_id);

  let history = useHistory();
  const handleClick = () => {
    // console.log(_id);
    history.push("/checkout/" + _id);
  };

  return (
    <div className="col-md-4 p-2 text-center ">
      <div className="card " style={{ width: "18rem;" }}>
        <img
          classNameNameName="mb-2"
          style={{ width: "100%", height: "250px" }}
          alt="services_image"
          src={`data:image/jpeg;base64,${service.image.img}`}
        />
        <div className="card-body">
          <h2 className="card-title bg-info text-white p-2">{service.name}</h2>
          <p className="card-text text-success">{service.description}</p>
          <button onClick={handleClick} className="btn btn-outline-danger">
            place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
