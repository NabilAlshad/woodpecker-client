import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const adminData = {
      email: data.email,
      name: data.name,
    };
    console.log(adminData);
    fetch("https://sleepy-reaches-65292.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminData),
    }).then((response) => {
      console.log("sent admin to database");
    });
  };

  return (
    <div className="col-md-10  mt-5">
      <h2
        style={{ margin: "10px auto" }}
        className="text-light text-center p-3 bg-info shadow-lg w-50"
      >
        Make a Admin
      </h2>
      <form className="col-md-4 text-center" onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group mb-2">
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            {...register("email")}
          ></input>
        </div>
        <div class="form-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="your name"
            {...register("name")}
          ></input>
        </div>
        <input
          className="btn btn-outline-success"
          type="submit"
          value="Make Admin"
        />
      </form>
    </div>
  );
};

export default AddAdmin;
