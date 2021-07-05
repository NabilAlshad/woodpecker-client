import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="col-md-4 p-5 mt-5">
      <div className="mt-5 card-review rounded p-5">
        <img src={review.imageUrl} className="mb-3" alt="" />
        <h3 className="bg-warning p-3 text-white">{review.name}</h3>
        <h5 className="text-secondary">{review.review}</h5>
      </div>
    </div>
  );
};

export default Review;
