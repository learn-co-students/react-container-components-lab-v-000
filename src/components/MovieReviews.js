import React from 'react';
import ReviewCard from './ReviewCard'

  const MovieReviews = ({reviews}) => {
    const reviewCards = reviews.map(review => <ReviewCard key={review.byline} review={review.headline}/>)

    return (
      <div className="review-list">
        {reviewCards}
      </div>
    )
  }

export default MovieReviews;
