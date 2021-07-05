import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-reaches-65292.herokuapp.com/getReviews")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <div className="Customers p-5">
      <h1 className="text-success text-center shadow-lg ">
        Our Happy Customers
      </h1>
      <div className="row w-100 text-center">
        {reviews.map((review) => (
          <Review review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
