import React from "react";
import "./About.css";
import about from "../../../images/about.jpg";

const About = () => {
  return (
    <div className="p-5 ">
      <div className="row p-5 bg-secondary bg-gradient">
        <div className="col-md-5 p-2">
          <img src={about} alt="" />
        </div>
        <div className="col-md-6 about">
          <h1 className="text-warning">About Us</h1>
          <p className="text-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            asperiores consequuntur sed dicta, reprehenderit fugit sapiente
            earum dolorem rerum maiores facilis incidunt magni quos odit placeat
            natus rem sequi. Doloremque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
