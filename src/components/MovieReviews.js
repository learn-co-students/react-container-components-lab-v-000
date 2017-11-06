// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {
  const movieReviews = reviews.map((review, index) => {
    return (<div className="review" key={index}>{review.display_title}</div>)
  })

  return (
    <div className="review-list">
      {movieReviews}
    </div>
  )
}

MovieReviews.defaultProps = {reviews: []}
export default MovieReviews;
