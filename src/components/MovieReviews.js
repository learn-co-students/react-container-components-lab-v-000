import React from 'react';
import ReviewCard from './ReviewCard'

  const MovieReviews = ({reviews}) => {
    const reviewCards = reviews.map(review => <ReviewCard key={Math.floor(Math.random()* (10000))} review={review} myRandomValue={true} />)
    return (
      <div className="review-list">
        {reviewCards}
      </div>
    )
  }

export default MovieReviews;
