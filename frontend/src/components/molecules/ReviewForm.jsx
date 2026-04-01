import React, { useState } from "react";

const ReviewForm = () => {
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    alert("Review submitted!");
  };

  return (
    <div className="review-form">
      <h3>Leave a Review</h3>

      <textarea
        placeholder="Write your feedback..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReviewForm;