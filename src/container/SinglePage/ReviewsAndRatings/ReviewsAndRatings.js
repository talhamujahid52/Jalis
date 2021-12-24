import React from "react";
import SingleReview from "./SingleReview";
const ReviewsAndRatings = () => {
  return (
    <>
      <h2 style={{ fontWeight: "bold", marginTop: "30px" }}>
        Reviews & Ratings
      </h2>
      <div
        style={{
          background: "#F8F9FA",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <SingleReview></SingleReview>
        <SingleReview></SingleReview>
      </div>
    </>
  );
};

export default ReviewsAndRatings;
