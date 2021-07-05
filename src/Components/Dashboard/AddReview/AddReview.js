import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddReview.css";
import axios from "axios";

const AddReview = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "1516ff75e6b9a4d539972fa0661bc8c7");
    imgData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onSubmit = (data) => {
    const reviewData = {
      name: data.name,
      review: data.review,
      imageUrl: imageUrl,
    };

    console.log(reviewData);
    fetch("https://sleepy-reaches-65292.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((response) => console.log("server side response"));
  };

  return (
    <div className="col-md-8">
      <form
        className="col-md-6 rounded shadow-lg p-5 rounded mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="form-group mb-2">
          <label for="exampleInputEmail1 ">Name</label>
          <input
            {...register("name")}
            type="text"
            class="form-control mt-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
          ></input>
        </div>
        <div class="form-group mt-3 ">
          <label for="exampleFormControlTextarea1">Review</label>
          <textarea
            {...register("review")}
            class="form-control "
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group mt-3">
          <label for="exampleFormControlTextarea1">upload Image</label>
          <input onChange={handleUpload} type="file" />
        </div>

        <button type="submit" class="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
