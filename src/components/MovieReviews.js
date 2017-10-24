import React from 'react'

const MovieReviews = props =>
  <ul className="review-list">
    {props.reviews && props.reviews.map(r => (<li className="review">{r.display_title} - {r.summary_short}</li>))}
  </ul>

MovieReviews.defaultProps = {reviews: []}

export default MovieReviews;
