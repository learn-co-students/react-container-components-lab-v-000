import React from "react";

const MovieReviews = props => {
  return (
    <div className="review-list">
      <ul>
        {props.reviews.map((movie, index) => (
          <li key={index} className="review">
            {movie.display_title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
