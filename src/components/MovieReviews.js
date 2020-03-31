import React from "react";

export default ({ reviews }) => {
  return (
    <div className="review-list">
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className="review">
            {JSON.stringify(review)}
          </li>
        ))}
      </ul>
    </div>
  );
};
