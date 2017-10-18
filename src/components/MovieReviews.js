import React, { Component } from 'react';

const MovieReviews = ({reviews}) => {
  const reviewsArray = reviews.map((review, i) => {
    return <li key={i} className="review"><a href={review.link.url}>{review.link.suggested_link_text}</a></li>
  })
  return(
    <ul className="review-list">
      {reviewsArray}
    </ul>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
