import React from "react";

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => (
        <div className="review" key={review.headline}>
          <h3>{review.headline}</h3>
          <p>{review.summary_short}</p>
          <a href={review.link.url}>Read Full Review</a>
          <br />
          {review.multimedia !== null ? (
            <img src={review.multimedia.src} alt={review.display_title} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default MovieReviews;
