// Code MovieReviews Here
import React from 'react';

const Review = ({display_title, headline, summary_short, link}) => {

  return (
    <div className="review" key={headline}>
      <h2><a href={link.url}>{display_title}</a></h2>
      <p>{headline}</p>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

/*

  const MovieReviews = ({reviews}) => {
    <div className="review-list">
    {reviews.map(review => <Review display_title={review.display_title} headline={review.headline} summary_short={review.summary_short} />)}
    </div>
  }

*/


export default MovieReviews;
