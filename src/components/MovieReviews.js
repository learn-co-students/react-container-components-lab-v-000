import React from 'react'

const Review = ({title, rating, headline, summary}) => (
  <div>
    <h2>{title}</h2>
    <strong><p>{rating}</p></strong>
    <h3>{headline}</h3>
    <p>{summary}</p>
  </div>
)

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      { reviews.map((review, index) =>
        <Review
          key={index}
          className="review"
          title={review.display_title}
          rating={review.critics_pick}
          headline={review.headline}
          summary={review.summary_short}
        />)
      }
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
