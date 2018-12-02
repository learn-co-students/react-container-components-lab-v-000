// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
  const reviews = [];

  props.reviews.forEach(review => {
    return reviews.push(
      <div className="review">
        <h4><a href={ review.link.url } >{ review.headline }</a></h4>
        <p>By { review.byline }</p>
        <p>{ review.summary_short }</p>
        <br />
      </div>
      );
  });

  return (
    <div className="review-list" >
      {reviews}
    </div>
  );
};

export default MovieReviews;
