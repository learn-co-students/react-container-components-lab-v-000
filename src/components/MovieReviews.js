import React from 'react';

const Review = ({display_title, mpaa_rating, byline, headline, summary_short, link}) => {
  return (
    <div className="review">
      <h4>{ display_title }</h4>
      <p>Rating: { mpaa_rating }</p>
      <p>By: { byline }</p>
      <p>{ summary_short }</p>
      <a href="{ link.url }">{ headline }</a>
    </div>
  );
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(Review) }
  </div>
)

export default MovieReviews;
