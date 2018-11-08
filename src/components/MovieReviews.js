import React from 'react'

const MovieReviews = ({reviews}) =>
  <ul className="review-list">
    {reviews.map((review) =>
      <li className="review">
        {review.headline}
      </li>
    )}
  </ul>

export default MovieReviews;
