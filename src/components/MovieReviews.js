// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      <ul>
        {props.reviews &&
          props.reviews.map((movie) => (
            <li className="review" key={movie.display_title}>
              <h3>{movie.display_title}</h3>
              {movie.multimedia && movie.multimedia.src && (
                <img src={movie.multimedia.src} />
              )}
              <p>{movie.summary_short}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
