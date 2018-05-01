import React from 'react';
const Review = ({key, title, summary}) => {
  return(
    <div key={key}>
      <strong>{title}</strong>
      <p>{summary}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => {

  return(
    <div className="review-list">
      {reviews.map((review, key) => <Review className="review" key={key} title={review.display_title} summary={review.summary_short} />)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
