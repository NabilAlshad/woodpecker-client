import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="p-5 bg-info ">
      <div className="col-md-6  ">
        <form
          className="mb-5 shadow-lg bg-info bg-gradient p-5 rounded"
          action=""
        >
          <h1
            style={{ fontSize: "50px", width: "50%", margin: "10px auto" }}
            className="text-light p-2 rounded text-center bg-secondary"
          >
            Contact us
          </h1>
          <div class="form-group mt-5">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="enter your name"
            />
          </div>{" "}
          <div class="form-group mt-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="email address"
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              class="form-control"
              placeholder="your message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            className=" btn btn-success text-center mt-2"
            type="submit"
            value="Submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
