import React from 'react';

const Review = ({
  display_title,
  headline,
  mpaa_rating,
  critics_pick,
  link
}) => {
  return(
    <div key={display_title} className="review">
      <ul>
        <h2>{ display_title }</h2>
        <h3>{ headline }</h3>
        <li>MPAA Rating: { mpaa_rating }</li>
        <li>Critics Pick: { critics_pick }</li>
        <li><a href={ link.url }>Review</a></li>
      </ul>
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{ reviews.map(Review) }</div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
