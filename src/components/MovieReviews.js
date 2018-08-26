// Code MovieReviews Here
import React from 'react';

const Review = ({display_title, summary_short, opening_date}) => {
  return(
    <li className="review">
      Title: {display_title}<br />
      Summary: {summary_short}<br />
      Opening: {opening_date}<br />
      <br />
    </li>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      <ul>
        {reviews.map(Review)}
      </ul>
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
