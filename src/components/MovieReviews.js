import React from 'react';

const Review = ({movie, rating, author, headline, summary}) => {
  return (
    <div className="review">
      <h3>{movie}</h3>
      <p>Rating: {rating}</p>
      <h5>{headline}</h5>
      <p>{author}</p>
      <p>{summary}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => <Review
        className="review"
        key={index}
        movie={review.display_title}
        rating={review.mpaa_rating}
        author={review.byline}
        headline={review.headline}
        summary={review.summary_short} />)}
    </div>
  )
}

MovieReviews.defaultProps = {reviews: []}

export default MovieReviews;
