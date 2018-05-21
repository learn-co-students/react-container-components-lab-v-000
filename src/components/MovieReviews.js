import React from 'react';

const MovieReviews = ({ reviews }) => {
  MovieReviews.defaultProps = {
    reviews: []
  }

  return (
    <div className="review-list">
      {reviews.map(review => {
        return (<div className="review">
          <h2>{review.display_title}</h2> 
          <h4>{review.critics_pick}</h4> 
          <p>{review.summary_short}</p> 
        </div>
        )
      })}
    </div> 
  )
}

export default MovieReviews; 